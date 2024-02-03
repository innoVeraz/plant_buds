import { Button as TailwindButton } from "@material-tailwind/react";

type Props = {
  variant: "primary" | "secondary" | "checkout";
  children: string;
};

const Button = ({ variant, children, ...props }: Props) => {
  if (variant === "primary") {
    return (
      <TailwindButton className="bg-leaf-green text-white" {...props}>
        {children}
      </TailwindButton>
    );
  }
  if (variant === "secondary") {
    return (
      <TailwindButton className="bg-gray-500 text-dark-forest" {...props}>
        {children}
      </TailwindButton>
    );
  }
  if (variant === "checkout") {
    return (
      <TailwindButton
        className="bg-black text-white w-4/12 p-1 text-lg font-normal"
        {...props}
      >
        {children}
      </TailwindButton>
    );
  }
};

export default Button;
