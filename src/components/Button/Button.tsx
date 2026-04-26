import "./Button.scss";

interface ButtonProps {
    size: "s" | "l";
    isArrow?: boolean;
    href?: string;
    onClick?: () => void;
}

export default function Button({ size, isArrow, href, onClick }: ButtonProps) {
    const Component = href ? 'a' : 'button';

    return (
        <div className={`${size === "s" ? "p3" : "p2"} btn-wrapper ${isArrow && "hover-with-arrow"}`}>
            <Component
                href={href}
                onClick={onClick}
                className={`${size === "s" ? 'btn-small' : 'btn-large'} btn ${isArrow ? 'btn-with-arrow' : 'btn-default'}`}
            >
                Order now
            </Component>

            {isArrow && (
                <Component>
                    <span className={`${size === "s" ? "arrow-small" : "arrow-large"} btn arrow`}>
                        <img src="/icons/arrow.svg" alt="Order now" />
                    </span>
                </Component>
            )
            }
        </div>
    );
}