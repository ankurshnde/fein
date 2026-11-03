"use client";

import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          alignItems: "center",
          padding: "48px 0 80px",
        }}
      >
        <div className="wrap" style={{ width: "100%", maxWidth: "860px" }}>
          {/* Main Title */}
          <h1
            style={{
              fontSize: "clamp(3.4rem, 8vw, 5.6rem)",
              lineHeight: "1.02",
              marginBottom: "28px",
              letterSpacing: "-0.03em",
              fontWeight: 400,
            }}
          >
            FE!N
          </h1>

          {/* Description Paragraph */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              lineHeight: "1.85",
              color: "var(--foreground)",
              marginBottom: "44px",
              fontWeight: 300,
            }}
          >
            <strong>FE!N</strong> is a multi-agent coordination system for wholesale
            cross-border payments, designed around institution-controlled AI agents.
            Each agent represents a financial institution’s policies and interests,
            coordinating with counterparty agents to negotiate transaction terms,
            prepare machine-readable agreements, verify compliance, assess liquidity,
            and coordinate settlement. Institutions retain control over their data,
            credentials, and payment authority; AI-driven coordination does not replace
            institutional authorization.
          </p>

          {/* Action Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              alignItems: "center",
            }}
          >
            {/* Button 1: Initial Repo */}
            <div className="technical-btn-wrap">
              <div className="btn-corner tl" />
              <div className="btn-corner tr" />
              <div className="btn-corner bl" />
              <div className="btn-corner br" />
              <a
                href="https://github.com/ai-arxiv/fein"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                Initial Repo ↗
              </a>
            </div>

            {/* Button 2: Upcoming v1 & Survey Paper */}
            <div className="technical-btn-wrap">
              <div className="btn-corner tl" />
              <div className="btn-corner tr" />
              <div className="btn-corner bl" />
              <div className="btn-corner br" />
              <div
                className="btn"
                style={{
                  cursor: "default",
                  textTransform: "none",
                  fontSize: "13px",
                  letterSpacing: "0.01em",
                  padding: "12px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--foreground)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    backgroundColor: "#00d294",
                    display: "inline-block",
                  }}
                />
                <span>
                  v1 will be released soon on the site w/ survey paper for peer review and further details
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
