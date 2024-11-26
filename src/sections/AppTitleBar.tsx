import clsx from "clsx";
import GlobalPlayerControls from "./GlobalPlayerControls";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";

/* Window Controls for Windows / Linux */
const WindowControls = () => {
  return <></>;
  // return (
  //     window.vortexAPI.platform === 'darwin' ? <></> :
  //         <Box sx={{
  //             '&': { "app-region": 'no-drag' },
  //             justifySelf: 'end',
  //             display: 'flex'
  //         }}>
  //             <IconButton onClick={window.vortexAPI.windowControls.minimize}><RemoveRounded /></IconButton>
  //             <IconButton onClick={window.vortexAPI.windowControls.restore}><CropSquareRounded /></IconButton>
  //             <IconButton
  //                 onClick={window.vortexAPI.windowControls.close}
  //                 sx={{ '&:hover': { background: '#da5151', color: 'white' } }}
  //             >
  //                 <CloseRounded />
  //             </IconButton>
  //         </Box>
  // )
};

const AppTitleBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("theme_light");
      document.body.classList.add("theme_dark");
    } else {
      document.body.classList.add("theme_light");
      document.body.classList.remove("theme_dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={clsx("h-14 pl-4 pr-4 flex", {
        "ml-20": window.vortexAPI.platform === "darwin",
      })}
    >
      <GlobalPlayerControls />
      <WindowControls />
      <div className="flex items-center pl-2">
        <Switch
            checked={isDarkMode}
            onChange={handleThemeToggle}
            className={`bg-app_background border border-primary_border flex items-center h-9 rounded-full w-16 p-1 cursor-pointer focus:outline-none`}
        >
            {isDarkMode ? null : (
            <img src={sunIcon} alt="Sun Icon" className="h-6 w-6" />
            )}
            <span
            className={`${
                isDarkMode
                ? "translate-x-0 bg-subSectionDarkBlue"
                : "translate-x-1 bg-scrollbarBlue"
            } inline-block w-6 h-6 transform rounded-full transition-transform duration-300 `}
            />
            {isDarkMode ? (
            <img src={moonIcon} alt="Moon Icon" className="h-4 w-4 ml-3" />
            ) : null}
        </Switch>
      </div>
      
    </div>
    // <Box sx={{
    //     '&': { "app-region": "drag" }, /* Add Electron Custom Title Bar Drag */
    //     padding: '4px',
    //     height: '46px',
    //     display: 'flex',
    // }}>
    //     <GlobalPlayerControls sx={{ flexGrow: 1 }} />
    //     <WindowControls />
    // </Box>
  );
};

export default AppTitleBar;
