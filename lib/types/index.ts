// Common component types
export interface ButtonProps {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Section component types
export interface PortfolioCardProps {
  logo: string;
  title: string;
  description: React.ReactNode;
  image: string;
  buttonText?: string;
  buttonIcon?: string;
  hasButton?: boolean;
  className?: string;
}

export interface LocationItemProps {
  name: string;
  description: string;
  isLast?: boolean;
}

export interface LegacyFeatureItemProps {
  icon: string;
  text: string;
}
