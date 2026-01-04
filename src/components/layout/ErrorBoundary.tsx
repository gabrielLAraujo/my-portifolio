'use client';

import React, { Component, ReactNode } from 'react';
import { errorLogger } from '@/lib/errors/ErrorLogger';
import { AppError } from '@/lib/errors/AppError';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and handle React errors
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error
    errorLogger.log(error, {
      componentStack: errorInfo.componentStack,
      type: 'ErrorBoundary',
    });

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">Oops!</h1>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Algo deu errado
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {this.state.error instanceof AppError
                  ? this.state.error.message
                  : 'Ocorreu um erro inesperado. Por favor, tente novamente.'}
              </p>
              <button
                onClick={this.handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <p className="font-mono text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </p>
                {this.state.error.stack && (
                  <pre className="mt-2 text-xs text-gray-700 dark:text-gray-300 overflow-auto">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
