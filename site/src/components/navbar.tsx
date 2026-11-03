"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="navbar">
      <div className="wrap nav-wrap">
        {/* Brand / Monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <span>FEIN</span>
            <span
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "var(--muted)",
                textTransform: "uppercase",
              }}
            >
              / fein.ankurshinde.com
            </span>
          </Link>
        </div>

        {/* Navigation Links + Theme Switcher */}
        <div className="nav-links">
          <a href="#overview" className="nav-link">
            Overview
          </a>
          <a href="#protocol" className="nav-link">
            Protocol
          </a>
          <a href="#architecture" className="nav-link">
            Architecture
          </a>
          <a href="#specs" className="nav-link">
            Specs
          </a>
          <a
            href="https://github.com/ankurshnde/fein"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub ↗
          </a>

          {/* Blueprint / Vellum Theme Switch Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="theme-switch-track"
              aria-label="Toggle theme"
              title={
                resolvedTheme === "dark"
                  ? "Switch to Vellum (Light) view"
                  : "Switch to Blueprint (Dark) view"
              }
            >
              <div
                className="theme-switch-thumb"
                style={{
                  left: resolvedTheme === "dark" ? "22px" : "3px",
                }}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
