import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { initFluence } from "../../redux/fluence/action";
import { initTransformations } from "../../redux/transformation/action";
import { initDatasets } from "../../redux/dataset/action";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [theme]);

  /******************************************************************
   * INIT REDUX
   ******************************************************************/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFluence());
  }, []);

  useEffect(() => {
    dispatch(initTransformations());
  }, []);

  useEffect(() => {
    dispatch(initDatasets());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
