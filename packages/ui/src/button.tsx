export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} style={{ padding: "80px"}}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
