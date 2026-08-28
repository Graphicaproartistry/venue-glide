import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ icon: Component, size = 20, color, className, style }) => {
  const Comp = Component as any;
  return <Comp size={size} color={color} className={className} style={style} />;
};

export default Icon;
