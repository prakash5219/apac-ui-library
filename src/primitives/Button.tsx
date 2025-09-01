import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'secondary':
      return 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50';
    case 'tertiary':
      return 'bg-transparent text-gray-900 border border-transparent hover:bg-gray-50';
    case 'primary':
    default:
      return 'bg-gray-900 text-white border border-gray-900 hover:bg-gray-800';
  }
}

function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'lg':
      return 'px-5 py-3 text-base';
    case 'md':
    default:
      return 'px-4 py-2.5 text-sm';
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, disabled, children, className = '', ...rest }, ref) => {
    const classes = [
      'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-150 gap-2',
      getVariantClasses(variant),
      getSizeClasses(size),
      (disabled || isLoading) ? 'opacity-60 pointer-events-none' : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} disabled={disabled || isLoading} {...rest}>
        {isLoading ? 'Loading…' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';


