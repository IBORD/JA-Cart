"use client";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

interface IconProps extends IconBaseProps {
  icon: ComponentType<IconBaseProps>;
  label: string;
}

export const Icon = ({ icon: IconComponent, label, ...props }: IconProps) => {
  return (
    <span role="img" aria-label={label} className="inline-flex items-center">
      <IconComponent {...props} />
    </span>
  );
};