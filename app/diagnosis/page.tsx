import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Co-Creation Wheel｜共創力診断 - WELLTOPIA",
  description:
    "WELLTOPIAが提供する共創力診断 Co-Creation Wheel。8つの視点から企業の共創力を可視化する体験型診断。",
};

export default function DiagnosisPage() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/diagnosis/style.css" />

      <div id="app" className="app">
        {/* Global top bar */}
        <div className="global-topbar">
          <img
            src="/images/logo/welltopia-blue.png"
            alt="WELLTOPIA"
            style={{ height: "15px", width: "auto" }}
          />
          <span className="brand-sub">CO-CREATION DIAGNOSIS</span>
        </div>

        <div className="split-layout" id="splitLayout">
          {/* LEFT: Wheel panel */}
          <aside className="wheel-panel" id="wheelPanel">
            <div className="wheel-panel-inner">
              <div className="wheel-container" id="wheelContainer">
                <svg
                  id="wheelSvg"
                  viewBox="0 0 440 440"
                  className="wheel-svg"
                  aria-hidden="true"
                >
                  <defs>
                    <filter
                      id="wheelShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="10"
                        floodColor="#172A63"
                        floodOpacity="0.10"
                      />
                    </filter>
                  </defs>
                  <circle
                    className="wheel-outer-ring"
                    cx="220"
                    cy="220"
                    r="196"
                  ></circle>
                  <g id="wheelRotor"></g>
                  <circle
                    className="wheel-inner-plate"
                    cx="220"
                    cy="220"
                    r="108"
                    filter="url(#wheelShadow)"
                  ></circle>
                </svg>
                <div className="wheel-labels" id="wheelLabels"></div>
                <div className="wheel-center" id="wheelCenter">
                  <div className="wc-title" id="wcTitle">
                    Co-Creation Wheel
                  </div>
                  <div className="wc-value" id="wcValue">
                    START
                  </div>
                  <div className="wc-sub" id="wcSub"></div>
                </div>
              </div>
              <div className="wheel-caption" id="wheelCaption">
                診断を始めると、回答するたびにホイールが完成していきます。
              </div>
            </div>
          </aside>

          {/* RIGHT: Content panel */}
          <main className="content-panel" id="contentPanel">
            <div className="content-inner" id="contentInner">
              {/* injected by app.js */}
            </div>
          </main>
        </div>

        <footer className="global-footer">
          <span>Co-Creation Management by WELLTOPIA</span>
        </footer>
      </div>

      <Script src="/diagnosis/app.js" strategy="afterInteractive" />
    </>
  );
}
