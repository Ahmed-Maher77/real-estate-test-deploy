import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-u4n3gigndbkmwq7h.us.auth0.com"
			clientId="zas1FpjbOxmEsOjL41GlqiKalXkdvWJJ"
			authorizationParams={{
				redirect_uri: "https://real-estate-test-deploy-six.vercel.app/",
			}}
			audience="https://real-estate-test-deploy.vercel.app"
			scope="openid profile email"
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
