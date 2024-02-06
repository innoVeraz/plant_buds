import {
  ButtonProps,
  Button as TailwindButton,
} from "@material-tailwind/react";

interface IButtonProps extends Omit<ButtonProps, "variant" | "ref"> {
  variant: "primary" | "secondary" | "black" | "gray";
  children: string;
}

const Button = ({ variant, children, ...props }: IButtonProps) => {
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
  if (variant === "black") {
    return (
      <TailwindButton
        className="bg-black text-white w-4/12 p-1 text-lg font-normal"
        {...props}
      >
        {children}
      </TailwindButton>
    );
  }
  if (variant === "gray") {
    return (
      <TailwindButton
        className=" bg-mellow-gray text-white md:text-xl md:px-8  py-1 font-normal"
        {...props}
      >
        {children}
      </TailwindButton>
    );
  }
};

export default Button;
