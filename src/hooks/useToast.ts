import { useCallback } from 'react';
import { useToastContext, ToastAction } from '@/contexts/ToastContext';

interface ShowToastOptions {
  title: string;
  message?: string;
  duration?: number;
  action?: ToastAction;
}

export function useToast() {
  const { toasts, addToast, removeToast, clearAll } = useToastContext();

  const showSuccess = useCallback(
    (title: string, message?: string, options?: Omit<ShowToastOptions, 'title' | 'message'>) => {
      return addToast({
        type: 'success',
        title,
        message,
        ...options,
      });
    },
    [addToast]
  );

  const showError = useCallback(
    (title: string, message?: string, options?: Omit<ShowToastOptions, 'title' | 'message'>) => {
      return addToast({
        type: 'error',
        title,
        message,
        ...options,
      });
    },
    [addToast]
  );

  const showWarning = useCallback(
    (title: string, message?: string, options?: Omit<ShowToastOptions, 'title' | 'message'>) => {
      return addToast({
        type: 'warning',
        title,
        message,
        ...options,
      });
    },
    [addToast]
  );

  const showInfo = useCallback(
    (title: string, message?: string, options?: Omit<ShowToastOptions, 'title' | 'message'>) => {
      return addToast({
        type: 'info',
        title,
        message,
        ...options,
      });
    },
    [addToast]
  );

  const success = useCallback(
    (message: string, options?: Omit<ShowToastOptions, 'message' | 'title'>) => {
      return showSuccess(message, undefined, options);
    },
    [showSuccess]
  );

  const error = useCallback(
    (message: string, options?: Omit<ShowToastOptions, 'message' | 'title'>) => {
      return showError(message, undefined, options);
    },
    [showError]
  );

  const warning = useCallback(
    (message: string, options?: Omit<ShowToastOptions, 'message' | 'title'>) => {
      return showWarning(message, undefined, options);
    },
    [showWarning]
  );

  const info = useCallback(
    (message: string, options?: Omit<ShowToastOptions, 'message' | 'title'>) => {
      return showInfo(message, undefined, options);
    },
    [showInfo]
  );

  return {
    toasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    success,
    error,
    warning,
    info,
    removeToast,
    clearAll,
  };
}
