import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    className = ''
}) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
