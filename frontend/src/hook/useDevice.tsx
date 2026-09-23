import { createContext, useContext } from "react";
import type { Device } from "./DeviceContextProvider";

export const DeviceContext = createContext<Device | null>(null);

export const useDevice = (): Device => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }

  return context;
};
