'use client';

import { useCallback } from 'react';
import { useToast } from './useToast';
import { useLanguage } from '@/contexts/LanguageContext';

export interface ErrorInfo {
  message: string;
  code?: string | number;
  context?: string;
  details?: unknown;
  retryAction?: () => void;
}

export function useErrorHandler() {
  const { showError, showWarning } = useToast();
  const { language } = useLanguage();

  const logError = useCallback((error: Error | ErrorInfo, context?: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Handler');
      console.error('Context:', context || 'Unknown');
      console.error('Error:', error);
      console.groupEnd();
    }
  }, []);

  const handleError = useCallback(
    (
      error: Error | ErrorInfo | unknown,
      options?: {
        context?: string;
        showToast?: boolean;
        retryAction?: () => void;
        fallbackMessage?: string;
      }
    ) => {
      const context = options?.context || 'Application';
      const showToast = options?.showToast !== false;

      let errorInfo: ErrorInfo;
      if (error instanceof Error) {
        errorInfo = {
          message: error.message,
          code: error.name,
          context,
          details: error.stack,
          retryAction: options?.retryAction,
        };
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        errorInfo = error as ErrorInfo;
      } else {
        errorInfo = {
          message:
            options?.fallbackMessage || (language === 'pt' ? 'Erro desconhecido' : 'Unknown error'),
          context,
          details: error,
          retryAction: options?.retryAction,
        };
      }

      logError(errorInfo, context);
      if (showToast) {
        const title = getErrorTitle(errorInfo, language);
        const message = getErrorMessage(errorInfo, language);

        showError(title, message, {
          action: errorInfo.retryAction
            ? {
                label: language === 'pt' ? 'Tentar novamente' : 'Retry',
                onClick: errorInfo.retryAction,
              }
            : undefined,
        });
      }

      return errorInfo;
    },
    [logError, showError, language]
  );

  const handleAsyncError = useCallback(
    async <T>(
      asyncFn: () => Promise<T>,
      options?: {
        context?: string;
        onError?: (error: ErrorInfo) => void;
        retryAction?: () => Promise<T>;
        fallbackValue?: T;
      }
    ): Promise<T | undefined> => {
      try {
        return await asyncFn();
      } catch (error) {
        const errorInfo = handleError(error, {
          context: options?.context,
          retryAction: options?.retryAction ? () => options.retryAction!() : undefined,
        });

        options?.onError?.(errorInfo);
        return options?.fallbackValue;
      }
    },
    [handleError]
  );

  const handleNetworkError = useCallback(
    (
      error: unknown, // Mudança: any -> unknown
      options?: {
        context?: string;
        retryAction?: () => void;
      }
    ) => {
      const isNetworkError =
        !navigator.onLine ||
        (error && typeof error === 'object' && 'code' in error && error.code === 'NETWORK_ERROR') ||
        (error &&
          typeof error === 'object' &&
          'message' in error &&
          typeof error.message === 'string' &&
          error.message.includes('fetch'));

      if (isNetworkError) {
        const title = language === 'pt' ? 'Erro de Conexão' : 'Connection Error';
        const message =
          language === 'pt'
            ? 'Verifique sua conexão com a internet e tente novamente.'
            : 'Check your internet connection and try again.';

        showWarning(title, message, {
          duration: 8000,
        });

        if (options?.retryAction) {
          setTimeout(options.retryAction, 3000);
        }
      } else {
        handleError(error, options);
      }
    },
    [handleError, showWarning, language]
  );

  return {
    handleError,
    handleAsyncError,
    handleNetworkError,
    logError,
  };
}

function getErrorTitle(error: ErrorInfo, language: string) {
  const titles = {
    pt: {
      ValidationError: 'Erro de Validação',
      NetworkError: 'Erro de Conexão',
      AuthError: 'Erro de Autenticação',
      PermissionError: 'Erro de Permissão',
      NotFoundError: 'Não Encontrado',
      ServerError: 'Erro do Servidor',
      default: 'Oops! Algo deu errado',
    },
    en: {
      ValidationError: 'Validation Error',
      NetworkError: 'Connection Error',
      AuthError: 'Authentication Error',
      PermissionError: 'Permission Error',
      NotFoundError: 'Not Found',
      ServerError: 'Server Error',
      default: 'Oops! Something went wrong',
    },
  };

  const lang = language as 'pt' | 'en';
  const codeKey = error.code as keyof (typeof titles)[typeof lang];
  return titles[lang][codeKey] || titles[lang].default;
}

function getErrorMessage(error: ErrorInfo, language: string) {
  const contextMessages = {
    pt: {
      'form-submit': 'Não foi possível enviar o formulário. Verifique os dados e tente novamente.',
      'data-fetch': 'Não foi possível carregar os dados. Tente atualizar a página.',
      'image-load': 'Não foi possível carregar a imagem.',
      navigation: 'Erro ao navegar. Tente recarregar a página.',
    },
    en: {
      'form-submit': 'Could not submit the form. Please check your data and try again.',
      'data-fetch': 'Could not load data. Please try refreshing the page.',
      'image-load': 'Could not load image.',
      navigation: 'Navigation error. Please try refreshing the page.',
    },
  };

  const lang = language as 'pt' | 'en';
  const contextKey = error.context as keyof (typeof contextMessages)[typeof lang];
  return contextMessages[lang][contextKey] || error.message;
}
