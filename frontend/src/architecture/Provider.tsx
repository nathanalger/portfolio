import { DeviceProvider } from "../hook/DeviceContextProvider";
import Router from "./Router";
import ThemeRoot from "./ThemeRoot";

const Provider = () => {
  return (
    <>
      <DeviceProvider>
        <ThemeRoot>
          <Router />
        </ThemeRoot>
      </DeviceProvider>
    </>
  );
};

export default Provider;
