import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'default' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
}

interface ButtonProps extends BaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

const sizeClasses: Record<Size, string> = {
  default: '',
  lg: 'btn-lg',
};

export function Button(props: Props) {
  const { variant = 'primary', size = 'default', children, className = '' } = props;
  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  const { onClick, type = 'button', disabled } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

interface LinkArrowProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkArrow({ to, children, className = '' }: LinkArrowProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-1.5 text-sm font-bold text-havilah-700 transition-colors hover:text-havilah-900 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
