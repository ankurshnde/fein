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
          padding: "24px 0 40px",
        }}
      >
        <div className="wrap" style={{ width: "100%", maxWidth: "860px" }}>
          {/* Expandable Headline on Hover */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            style={{
              marginBottom: "28px",
              cursor: "pointer",
              display: "inline-block",
            }}
            title="Hover to reveal full form"
          >
            <h1
              style={{
                fontSize: isHovered
                  ? "clamp(1.9rem, 4.3vw, 3.3rem)"
                  : "clamp(3.4rem, 8vw, 5.6rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                fontWeight: 400,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                userSelect: "none",
                color: "var(--foreground)",
              }}
            >
              {isHovered ? (
                <span style={{ fontStyle: "italic" }}>
                  Financial Enterprise Intelligence Network
                </span>
              ) : (
                <span>FE!N</span>
              )}
            </h1>
          </div>

          {/* Core Description Paragraph */}
          <p
            style={{
              fontSize: "clamp(1.02rem, 1.75vw, 1.2rem)",
              lineHeight: "1.85",
              color: "var(--foreground)",
              marginBottom: "36px",
              fontWeight: 300,
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
            is a multi-agent coordination system for wholesale cross-border payments,
            designed around institution-controlled AI agents. Each agent represents a
            financial institution’s policies and interests, coordinating with counterparty
            agents to negotiate transaction terms, prepare machine-readable agreements,
            verify compliance, assess liquidity, and coordinate settlement. Institutions
            retain control over their data, credentials, and payment authority; AI-driven
            coordination does not replace institutional authorization.
          </p>

          {/* Action: Initial Repo Button */}
          <div>
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

          {/* Status Note: v1 release & survey paper (not a button) */}
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: "1.6",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#00d294",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span>
              v1 will be released soon on the site w/ survey paper for peer review and further details.
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
