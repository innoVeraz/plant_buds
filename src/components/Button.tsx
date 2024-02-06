import {
  ButtonProps,
  Button as TailwindButton,
} from "@material-tailwind/react";
import cx from "clsx";

interface IButtonProps extends Omit<ButtonProps, "variant" | "ref"> {
  variant: "primary" | "secondary" | "black" | "gray";
  children: string;
}

const Button = ({ variant, children, className, ...props }: IButtonProps) => {
  let classes = "";

  if (variant === "primary") {
    classes =
      "bg-leaf-green text-white transition duration-150 ease-out hover:ease-in";
  }
  if (variant === "secondary") {
    classes = "bg-gray-500 text-dark-forest";
  }
  if (variant === "black") {
    classes = "bg-black text-white w-4/12 p-1 text-lg font-normal";
  }
  if (variant === "gray") {
    classes = "bg-mellow-gray text-white md:text-xl md:px-8  py-1 font-normal";
  }
  return (
    <TailwindButton className={cx(classes, className)} {...props}>
      {children}
    </TailwindButton>
  );
};

export default Button;
