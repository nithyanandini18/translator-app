import React from 'react';

export default function LoadingSpinner({ size = "md", color = "text-indigo-600", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-5 h-5 border-2",
    lg: "w-8 h-8 border-3"
  };
  const spinnerSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div role="status" aria-label="Loading" className={`inline-flex items-center justify-center ${className}`}>
      <div className={`${spinnerSize} ${color} border-current border-t-transparent rounded-full animate-spin`} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
