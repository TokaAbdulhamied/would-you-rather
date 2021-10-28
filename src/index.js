import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./store/store";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const store = Store();
const { palette } = createTheme();
const theme = createTheme({
  palette: {
    secondary: {
      main: "#767676",
    },
    primary: {
      main: "#21ba45",
    },
    success: {
      main: "#222",
      contrastText: "#fff",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
