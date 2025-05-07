"use client";

import Logo from "./logo";
import { useState, useEffect } from "react";

function randomColor() {
  return `oklch(80% 0.12 ${Math.random() * 360})`;
}

const LogoWrapper = () => {
  const [logoColor, setLogoColor] = useState<string | null>(null);

  useEffect(() => {
    setLogoColor(randomColor());
  }, []);

  const handleMouseEnter = () => {
    setLogoColor(randomColor());
  };

  return (
    <Logo
      className="w-8 h-8"
      style={{ color: logoColor ?? "inherit" }}
      onMouseEnter={handleMouseEnter}
    />
  );
};

export default LogoWrapper;
