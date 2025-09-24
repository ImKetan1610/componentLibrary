import React from "react";
import classNames from "classnames";
import type { InputProps } from "./Input.types";
import { useTheme } from "../../context/ThemeContext";

const Input: React.FC<InputProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className,
  ...props
}) => {
  const { theme } = useTheme();
};
