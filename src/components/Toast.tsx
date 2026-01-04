'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimesCircle,
  FaTimes,
} from 'react-icons/fa';
import type { Toast } from '@/contexts/ToastContext';

export type { Toast };

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const toastConfig = {
  success: {
    icon: FaCheckCircle,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    textColor: 'text-green-800 dark:text-green-200',
  },
  error: {
    icon: FaTimesCircle,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
    textColor: 'text-red-800 dark:text-red-200',
  },
  warning: {
    icon: FaExclamationCircle,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    textColor: 'text-yellow-800 dark:text-yellow-200',
  },
  info: {
    icon: FaInfoCircle,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-800 dark:text-blue-200',
  },
};

export function ToastItem({ toast, onClose }: ToastProps) {
  const config = toastConfig[toast.type];
  const IconComponent = config.icon;

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        onClose(toast.id);
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        relative w-full max-w-sm p-4 rounded-lg border shadow-lg backdrop-blur-sm
        ${config.bgColor} ${config.borderColor}
      `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3">
        <IconComponent
          className={`text-xl ${config.iconColor} flex-shrink-0 mt-0.5`}
          aria-hidden="true"
        />

        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold ${config.textColor}`}>{toast.title}</h4>

          {toast.message && (
            <p className={`text-sm mt-1 ${config.textColor} opacity-90`}>{toast.message}</p>
          )}

          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className={`
                text-sm font-medium underline mt-2 hover:no-underline focus:outline-none 
                focus:ring-2 focus:ring-offset-1 rounded ${config.textColor}
              `}
            >
              {toast.action.label}
            </button>
          )}
        </div>

        <button
          onClick={() => onClose(toast.id)}
          className={`
            flex-shrink-0 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 
            focus:outline-none focus:ring-2 focus:ring-offset-1 ${config.textColor}
          `}
          aria-label="Fechar notificação"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>

      {toast.duration && toast.duration > 0 && (
        <motion.div
          className={`absolute bottom-0 left-0 h-1 ${config.iconColor.replace(
            'text-',
            'bg-'
          )} rounded-bl-lg`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration / 1000, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
}

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
};

export function ToastContainer({ toasts, onClose, position = 'top-right' }: ToastContainerProps) {
  return (
    <div
      className={`fixed z-[9999] pointer-events-none ${positionClasses[position]}`}
      aria-live="polite"
      aria-label="Notificações"
    >
      <div className="flex flex-col gap-2 pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onClose={onClose} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
