import { useEffect, useState, type ReactNode } from "react";
import { DeviceContext } from "./useDevice";
const MOBILE_BREAKPOINT = 768;
const RESIZE_DEBOUNCE_MS = 100;
export interface Device {
  isMobile: boolean;
  width: number;
  height: number;
  isTouchDevice: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  isLinux: boolean;
}
const getDevice = (): Device => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS =
    /iphone|ipad|ipod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /android/.test(userAgent);
  const isWindows = /win/.test(userAgent);
  const isMacOS = /mac/.test(userAgent) && !isIOS;
  const isLinux = /linux/.test(userAgent) && !isAndroid;
  const isTouchDevice =
    navigator.maxTouchPoints > 0 || "ontouchstart" in window;
  return {
    isMobile: width < MOBILE_BREAKPOINT,
    width,
    height,
    isTouchDevice,
    isLandscape: width > height,
    isPortrait: height >= width,
    isIOS,
    isAndroid,
    isWindows,
    isMacOS,
    isLinux,
  };
};
interface DeviceProviderProps {
  children: ReactNode;
}
export const DeviceProvider = ({ children }: DeviceProviderProps) => {
  const [device, setDevice] = useState<Device>(getDevice);
  useEffect(() => {
    let timeout: number | undefined;
    const handleResize = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setDevice(getDevice());
      }, RESIZE_DEBOUNCE_MS);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeout);
    };
  }, []);
  return (
    <DeviceContext.Provider value={device}> {children} </DeviceContext.Provider>
  );
};
