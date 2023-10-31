import React from 'react';
import classNames from 'classnames';

export type IconProps = 'some SVG icon props';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'loud';

export interface ButtonProps {
  as?: React.ElementType;
  type: ButtonType;
  size: ButtonSize;
  variant: ButtonVariant;
  children: string;
  /* icon: (props: IconProps) => JSX.Element; */
}

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (props: ButtonProps, ref) => {
    const {
      as: Component = 'button',
      type,
      size,
      variant,
      children,
      ...rest
    } = props;
    return (
      <Component
        {...rest}
        type={type}
        ref={ref}
        className={classNames(
          `w-full 
            flex  
            border border-transparent
            items-center justify-center`,
          {
            'text-white bg-nxa-black hover:bg-nxa-red font-medium rounded shadow-sm transition duration-300':
              variant === 'primary',
          },
          {
            'text-white bg-nxa-red hover:bg-nxa-black font-medium rounded shadow-sm transition duration-300':
              variant === 'secondary',
          },
          {
            'text-white bg-nxa-red hover:bg-nxa-black font-medium rounded shadow-sm transition duration-300':
              variant === 'loud',
          },
          // {"text-gray-300 hover:text-white font-light": props.variant === "footerLink"},
          // {"text-gray-300 hover:text-white font-medium": props.variant === "navLink"},
          { 'px-3 py-1 text-sm': size === 'small' },
          { 'px-4 py-2 text-base': size === 'medium' },
          { 'px-6 py-3 text-base': size === 'large' }
        )}
      >
        {children}
      </Component>
    );
  }
);
Button.defaultProps = {
  as: 'a',
};

Button.displayName = 'Button';
