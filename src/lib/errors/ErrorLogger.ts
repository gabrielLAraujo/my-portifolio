import { AppError } from './AppError';

/**
 * Error logger interface
 */
interface ErrorLoggerConfig {
  logToConsole?: boolean;
  logToService?: boolean;
  serviceName?: string;
}

/**
 * Error logger class
 */
export class ErrorLogger {
  private config: ErrorLoggerConfig;

  constructor(config: ErrorLoggerConfig = {}) {
    this.config = {
      logToConsole: true,
      logToService: false,
      ...config,
    };
  }

  /**
   * Log an error
   */
  log(error: Error | AppError, context?: Record<string, unknown>): void {
    if (this.config.logToConsole) {
      this.logToConsole(error, context);
    }

    if (this.config.logToService) {
      this.logToService(error, context);
    }
  }

  /**
   * Log error to console
   */
  private logToConsole(error: Error | AppError, context?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
        ...(error instanceof AppError && {
          statusCode: error.statusCode,
          isOperational: error.isOperational,
          timestamp: error.timestamp,
          errorContext: error.context,
        }),
        additionalContext: context,
      });
    }
  }

  /**
   * Log error to external service (placeholder for Sentry, etc)
   */
  private logToService(error: Error | AppError, context?: Record<string, unknown>): void {
    // TODO: Implement external error logging service
    // Example: Sentry.captureException(error, { contexts: context });
    console.log('Would log to external service:', error.message, context);
  }

  /**
   * Log a warning
   */
  warn(message: string, context?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Warning:', message, context);
    }
  }

  /**
   * Log info
   */
  info(message: string, context?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === 'development') {
      console.info('Info:', message, context);
    }
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();
