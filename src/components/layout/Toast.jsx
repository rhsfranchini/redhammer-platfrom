// src/components/layout/Toast.jsx
export default function Toast({ message, type = 'info' }) {
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  }[type] || 'bg-blue-500';

  return (
    <div className={`fixed bottom-6 right-6 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 toast-enter`}>
      {message}
    </div>
  );
}
