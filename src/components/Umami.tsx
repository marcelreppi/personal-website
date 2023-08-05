import Script from "next/script";
import { TrackerConfig } from "../types";

const isProd = process?.env?.NODE_ENV === 'production';
const ENV = isProd ? "PROD" : "DEV";

const TRACKER_CONFIG: Record<string, TrackerConfig> = {
	DEV: {
		WEBSITE_ID: "49bf16ab-5ee4-4e38-9454-cac8f47e03e4",
		SCRIPT_SRC: "https://umami.marcelreppi.com/umami.js",
		DOMAIN: "localhost",
	},
	PROD: {
		WEBSITE_ID: "125b2ab7-46a5-4f4a-a652-23162a362b7d",
		SCRIPT_SRC: "blubb.js",
		DOMAIN: "marcelreppi.com",
	},
};

function Umami() {
	const { WEBSITE_ID, SCRIPT_SRC, DOMAIN } = TRACKER_CONFIG[ENV];

	return (
		<Script
			async
			defer
			data-website-id={WEBSITE_ID}
			src={SCRIPT_SRC}
			data-domains={DOMAIN}
		></Script>
	);
}

export default Umami;