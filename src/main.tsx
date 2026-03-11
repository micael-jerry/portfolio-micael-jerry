import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import i18n from "./i18n/index.ts";
import "./main.css";

// Sync document lang with i18next
const updateLang = (lng: string) => {
	document.documentElement.lang = lng.startsWith("fr") ? "fr" : "en";
};
updateLang(i18n.language);
i18n.on("languageChanged", updateLang);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
