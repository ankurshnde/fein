"use client";

import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "calc(100vh - 120px)", display: "flex", alignItems: "center", padding: "40px 0 80px" }}>
        <div className="wrap" style={{ width: "100%" }}>
          {/* Metadata pill */}
          <div style={{ marginBottom: "28px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
            <span className="badge-mono accent">
              <span style={{ width: "6px", height: "6px", background: "#00d294", display: "inline-block" }} />
              DRAFT SPECIFICATION v0.1
            </span>
            <span className="badge-mono">
              PROJECT NANDA / SPPU RESEARCH
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(3.2rem, 8vw, 5.8rem)",
              lineHeight: "1.0",
              marginBottom: "16px",
              letterSpacing: "-0.03em",
              fontWeight: 400
            }}
          >
            FE!N
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3.8vw, 2.6rem)",
              color: "var(--muted)",
              marginBottom: "32px",
              lineHeight: "1.25"
            }}
          >
            Financial Enterprise Intelligence Network
          </p>

          {/* Core Concept Statement for the Feel */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: "1.8",
              maxWidth: "680px",
              color: "var(--foreground)",
              marginBottom: "40px"
            }}
          >
            A coordination protocol for bilateral commitment, cryptographic verification, and 
            conditional settlement between sovereign enterprise AI agents.
          </p>

          {/* Action Row / GitHub Link */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <div className="technical-btn-wrap">
              <div className="btn-corner tl" />
              <div className="btn-corner tr" />
              <div className="btn-corner bl" />
              <div className="btn-corner br" />
              <a
                href="https://github.com/ankurshnde/fein"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Repository ↗
              </a>
            </div>

            <div className="technical-btn-wrap">
              <div className="btn-corner tl" />
              <div className="btn-corner tr" />
              <div className="btn-corner bl" />
              <div className="btn-corner br" />
              <a
                href="https://ankurshinde.com"
                target="_self"
                className="btn"
              >
                About the Architect
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
