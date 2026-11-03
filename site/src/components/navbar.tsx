"use client";

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
        {/* Brand / Top-left Title */}
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
            }}
          >
            <span>FE!N.ankurshinde.com</span>
          </a>
        </div>

        {/* Minimal Navigation + Theme Switcher */}
        <div className="nav-links" style={{ gap: "24px" }}>
          <a
            href="https://ankurshinde.com/#projects"
            target="_self"
            className="nav-link"
          >
            See other projects
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
