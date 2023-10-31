import React from 'react';

export interface LinkProps {
  as?: React.ElementType;
  children: string;
  /* icon: (props: IconProps) => JSX.Element; */
}

export const CtfLink: React.FC<LinkProps> = React.forwardRef(
  (props: LinkProps, ref) => {
    const {
      as: Component = 'link',
      children,
      ...rest
    } = props;
    return (
      <Component
        {...rest}
        ref={ref}
         className="hover:cursor-pointer"
      >
        {children}
      </Component>
    );
  }
);
CtfLink.defaultProps = {
  as: 'a',
};

CtfLink.displayName = 'CtfLink';
