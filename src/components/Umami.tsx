import Script from "next/script";
import { TrackerConfig } from "../types";

const UMAMI_SCRIPT = "https://umami.marcelreppi.com/script.js";

const DEV_CONFIG: TrackerConfig = {
  websiteId: "49bf16ab-5ee4-4e38-9454-cac8f47e03e4",
  scriptSrc: UMAMI_SCRIPT,
};

const PROD_CONFIG: TrackerConfig = {
  websiteId: "125b2ab7-46a5-4f4a-a652-23162a362b7d",
  scriptSrc: UMAMI_SCRIPT,
  domain: "marcelreppi.com",
};

const IS_PROD = process?.env?.VERCEL_ENV === "production";

const TRACKER_CONFIG = IS_PROD ? PROD_CONFIG : DEV_CONFIG;

function Umami() {
  const { websiteId, scriptSrc, domain } = TRACKER_CONFIG;

  return (
    <Script async defer data-website-id={websiteId} src={scriptSrc} data-domains={domain}></Script>
  );
}

export default Umami;
