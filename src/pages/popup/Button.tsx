import { FC, ReactNode } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  active = false,
  children,
  ...props
}) => (
  <button
    type="button"
    className={`button ${active ? 'button-active' : ''}`}
    {...props}
  >
    {children}
  </button>
);
