import Script from "next/script";

export default function PlausibleAnalytics() {
  const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;

  if (!scriptUrl) {
    return null;
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };`
        }}
      />
      <Script src={scriptUrl} strategy="afterInteractive" />
    </>
  );
}
