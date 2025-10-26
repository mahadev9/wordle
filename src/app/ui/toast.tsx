'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = 'info', onClose, duration = 2000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-gray-800',
  }[type];

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 toast-enter">
      <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg font-semibold`}>
        {message}
      </div>
    </div>
  );
}
