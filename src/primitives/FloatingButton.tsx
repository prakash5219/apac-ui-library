import * as React from 'react';

export type FloatingButtonPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type FloatingButtonSize = 'sm' | 'md' | 'lg';

export interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position?: FloatingButtonPosition;
  offsetX?: number;
  offsetY?: number;
  size?: FloatingButtonSize;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  ariaLabel?: string;
}

function getPositionClasses(position: FloatingButtonPosition): string {
  switch (position) {
    case 'bottom-left':
      return 'fixed bottom-6 left-6';
    case 'top-right':
      return 'fixed top-6 right-6';
    case 'top-left':
      return 'fixed top-6 left-6';
    case 'bottom-right':
    default:
      return 'fixed bottom-6 right-6';
  }
}

function getSizeClasses(size: FloatingButtonSize): string {
  switch (size) {
    case 'sm':
      return 'w-10 h-10 text-base';
    case 'lg':
      return 'w-14 h-14 text-xl';
    case 'md':
    default:
      return 'w-12 h-12 text-lg';
  }
}

function getVariantClasses(variant: 'primary' | 'secondary'): string {
  switch (variant) {
    case 'secondary':
      return 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50';
    case 'primary':
    default:
      return 'bg-gray-900 text-white border border-gray-900 hover:bg-gray-800';
  }
}

export const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      position = 'bottom-right',
      offsetX = 24,
      offsetY = 24,
      size = 'md',
      variant = 'primary',
      icon,
      ariaLabel,
      disabled,
      className = '',
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-semibold rounded-full',
      'shadow-lg transition-colors duration-150',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400',
      getPositionClasses(position),
      getSizeClasses(size),
      getVariantClasses(variant),
      disabled ? 'opacity-60 pointer-events-none' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const computedStyle: React.CSSProperties = { ...style };
    // Apply custom offsets if provided, overriding the default spacing from classes
    if (position.includes('bottom')) {
      computedStyle.bottom = offsetY;
      delete (computedStyle as any).top;
    } else {
      computedStyle.top = offsetY;
      delete (computedStyle as any).bottom;
    }
    if (position.includes('right')) {
      computedStyle.right = offsetX;
      delete (computedStyle as any).left;
    } else {
      computedStyle.left = offsetX;
      delete (computedStyle as any).right;
    }

    return (
      <button ref={ref} className={baseClasses} aria-label={ariaLabel} disabled={disabled} style={computedStyle} {...rest}>
        {icon ? icon : children}
      </button>
    );
  }
);

FloatingButton.displayName = 'FloatingButton';


