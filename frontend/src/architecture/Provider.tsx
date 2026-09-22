import Router from "./Router";
import ThemeRoot from "./ThemeRoot";

const Provider = () => {
  return (
    <>
      <ThemeRoot>
        <Router />
      </ThemeRoot>
    </>
  );
};

export default Provider;
