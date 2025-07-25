"use client";

import { useState, useCallback } from "react";
import { Toast, ToastType } from "@/components/Toast";

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((
    type: ToastType,
    title: string,
    message?: string,
    options?: {
      duration?: number;
      action?: {
        label: string;
        onClick: () => void;
      };
    }
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: Toast = {
      id,
      type,
      title,
      message,
      duration: options?.duration ?? (type === "error" ? 0 : 5000), // Erros ficam até serem fechados manualmente
      action: options?.action,
    };

    setToasts(prev => [...prev, toast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Funções de conveniência
  const showSuccess = useCallback((title: string, message?: string, options?: { duration?: number }) => {
    return addToast("success", title, message, options);
  }, [addToast]);

  const showError = useCallback((title: string, message?: string, options?: { 
    duration?: number;
    action?: { label: string; onClick: () => void; }
  }) => {
    return addToast("error", title, message, options);
  }, [addToast]);

  const showWarning = useCallback((title: string, message?: string, options?: { duration?: number }) => {
    return addToast("warning", title, message, options);
  }, [addToast]);

  const showInfo = useCallback((title: string, message?: string, options?: { duration?: number }) => {
    return addToast("info", title, message, options);
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
} 