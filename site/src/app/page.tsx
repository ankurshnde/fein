"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 90px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 0 40px",
        }}
      >
        <div
          className="wrap"
          style={{
            width: "100%",
            maxWidth: "840px",
            textAlign: "center",
          }}
        >
          {/* Centered locked-height title container: zero layout shift on hover */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            style={{
              height: "84px",
              marginBottom: "24px",
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
            }}
            title="Hover to reveal full form"
          >
            {/* Short Form: FE!N */}
            <h1
              style={{
                position: "absolute",
                margin: 0,
                fontSize: "clamp(3.4rem, 8vw, 5.6rem)",
                lineHeight: "1.0",
                letterSpacing: "-0.03em",
                fontWeight: 400,
                opacity: isHovered ? 0 : 1,
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                pointerEvents: isHovered ? "none" : "auto",
                transition: "opacity 0.25s ease, transform 0.25s ease",
                color: "var(--foreground)",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              FE!N
            </h1>

            {/* Expanded Full Form */}
            <h1
              style={{
                position: "absolute",
                margin: 0,
                fontSize: "clamp(1.6rem, 3.4vw, 2.5rem)",
                fontStyle: "italic",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: 400,
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(4px)",
                pointerEvents: isHovered ? "auto" : "none",
                transition: "opacity 0.25s ease, transform 0.25s ease",
                color: "var(--foreground)",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              Financial Enterprise Intelligence Network
            </h1>
          </div>

          {/* Centered Core Description Paragraph */}
          <p
            style={{
              fontSize: "clamp(1.02rem, 1.75vw, 1.2rem)",
              lineHeight: "1.85",
              color: "var(--foreground)",
              marginBottom: "36px",
              fontWeight: 300,
              textAlign: "center",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <strong
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ cursor: "pointer" }}
              title="Financial Enterprise Intelligence Network"
            >
              FE!N
            </strong>{" "}
            is a proposed multi-agent infrastructure layer for coordinating wholesale cross-border
            payments between financial institutions. It enables institution-controlled AI agents to
            negotiate transaction terms, prepare machine-readable agreements, coordinate compliance
            and liquidity checks, and orchestrate settlement workflows. Each institution retains
            control over its data, policies, credentials, and payment authority, separating AI-driven
            coordination from authorized financial execution.
          </p>

          {/* Centered Action Button: Initial Repo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="technical-btn-wrap">
              <div className="btn-corner tl" />
              <div className="btn-corner tr" />
              <div className="btn-corner bl" />
              <div className="btn-corner br" />
              <a
                href="https://github.com/ai-arxiv/fein"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Initial Repo ↗
              </a>
            </div>
          </div>

          {/* Centered Status Note */}
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            <span className="status-indicator-dot" />
            <span>
              v1 will be released soon on the site w/ survey paper for peer review and further details.
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
