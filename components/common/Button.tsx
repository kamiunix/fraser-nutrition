
interface ButtonProps {
    size?: "small" | "medium" | "large";
    color?: string;
    textColor?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
const Button = (
    {
        size,
        color,
        children,
        className,
        onClick,
        textColor = "white",
    }: ButtonProps
) => {
    const sizeMap = {
        small: "1em",
        medium: "1.5em",
        large: "2em",
    };

    return (
        <button
            className={className}
            style={{
                padding: "1em",
                fontSize: sizeMap[size] || "1em",
                backgroundColor: color,
                color: textColor,
                border: "none",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;