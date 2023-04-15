import { useState } from "react";
import "./style.css";
import { TiShoppingCart } from "react-icons/ti";
import { Noto_Sans_JP } from "@next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const Button = ({
  size,
  color,
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  defaultButton,
}: any) => {
  let style = "button";

  // color
  const defaultColor = color === "default";
  const primaryColor = color === "primary";
  const secondaryColor = color === "secondary";
  const dangerColor = color === "danger";

  defaultColor && (style = "default");
  primaryColor && (style = "primary");
  secondaryColor && (style = "secondary");
  dangerColor && (style = "danger");

  const defaultHoverColor = color === "default-hover";
  const primaryHoverColor = color === "primary-hover";
  const secondaryHoverColor = color === "secondary-hover";
  const dangerHoverColor = color === "danger-hover";

  defaultHoverColor && (style = "default-hover");
  primaryHoverColor && (style = "primary-hover");
  secondaryHoverColor && (style = "secondary-hover");
  dangerHoverColor && (style = "danger-hover");

  // variant
  const outlineVariant = variant === "outline";
  const textVariant = variant === "text";

  outlineVariant && (style = "outline");
  textVariant && (style = "text");

  const outlineHoverVariant = variant === "outline-hover";
  const textHoverVariant = variant === "text-hover";

  outlineHoverVariant && (style = "outline-hover");
  textHoverVariant && (style = "text-hover");

  // Icon
  const iconStart = startIcon === "local_grocery_store";
  const iconEnd = endIcon === "local_grocery_store";

  iconStart && (style = "start-icon");
  iconEnd && (style = "end-icon");

  // size
  const smSize = size === "sm";
  const mdSize = size === "md";
  const lgSize = size === "lg";

  smSize && (style = "sm");
  mdSize && (style = "md");
  lgSize && (style = "lg");

  const buttonDefault = defaultButton === "button-hover";
  buttonDefault && (style = "button-hover");

  disabled && (style = "disabled");
  textVariant && disabled && (style = "disabled-text");
  disableShadow && (style = "disableShadow");

  return (
    <div className={notoSansJp.className}>
      <button className={style}>
        {iconStart && (
          <>
            <TiShoppingCart />{" "}
          </>
        )}
        {disabled ? "Disabled" : "Default"}
        {iconEnd && (
          <>
            {" "}
            <TiShoppingCart />
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
