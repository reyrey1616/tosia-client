import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./sass/main.scss";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
// axios.defaults.baseURL = "http://localhost:5000/api/v1/";
import { init } from "emailjs-com";
init("user_6IFNMA9CyTtMhVkdTlmFY");
if (process.env.NODE_ENV === "development") {
	// axios.defaults.baseURL = "http://localhost:5000/api/v1/";
	axios.defaults.baseURL = "https://tosia.xyz/api/v1/";
} else {
	axios.defaults.baseURL = "https://tosia.xyz/api/v1/";
}
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
