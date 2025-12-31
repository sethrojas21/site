// theme/font.ts
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export function useFontSize() {
  const getInitialWidth = () => {
    const d = Dimensions.get("window");
    if (d && typeof d.width === "number" && d.width > 0) return d.width;
    if (typeof window !== "undefined" && window.innerWidth) return window.innerWidth;
    return 375;
  };

  const [width, setWidth] = useState(getInitialWidth);

  useEffect(() => {
    const dimHandler = ({ window }: { window: { width: number } }) => {
      if (window?.width) setWidth(window.width);
    };

    const winHandler = () => {
      if (typeof window !== "undefined") setWidth(window.innerWidth || getInitialWidth());
    };

    const sub = Dimensions.addEventListener?.("change", dimHandler);
    if (typeof window !== "undefined" && window.addEventListener) window.addEventListener("resize", winHandler);

    // ensure we pick up correct size after mount
    winHandler();

    return () => {
      if (sub?.remove) sub.remove();
      if (typeof window !== "undefined" && window.removeEventListener) window.removeEventListener("resize", winHandler);
    };
  }, []);

  const scale = width > 0 ? width / 375 : 1;

  return {
    xxs: Math.max(8, Math.round(8 * scale)),
    xs: Math.max(12, Math.round(12 * scale)),
    sm: Math.max(14, Math.round(14 * scale)),
    md: Math.max(16, Math.round(16 * scale)),
    lg: Math.max(18, Math.round(18 * scale)),
    xl: Math.max(22, Math.round(22 * scale)),
    xxl: Math.max(28, Math.round(28 * scale)),
  };
}