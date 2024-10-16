import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-u4n3gigndbkmwq7h.us.auth0.com"
			clientId="I7mrdGJDmyyhLxoCpkfhjRMpNE59eGwM"
			authorizationParams={{
				redirect_uri: "https://real-estate-test-deploy-six.vercel.app/",
			}}
			audience="http://localhost:8000"
			scope="openid profile email"
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
