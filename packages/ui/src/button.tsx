export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  const { variant, ...props } = other;

  const style = {
    ...(variant === "primary"
      ? {
          backgroundColor: "green",
          color: "white",
        }
      : {
          backgroundColor: "#f0f0f0",
          color: "black",
        }),
    border: "1px solid gray",
    borderRadius: 50,
    cursor: "pointer",
    fontSize: 16,
    padding: "12px 24px",
  };

  return (
    <button type="button" style={style} {...props}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
