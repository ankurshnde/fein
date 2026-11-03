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
      <div className="wrap nav-wrap" style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* Navigation Links + Theme Switcher */}
        <div className="nav-links" style={{ gap: "24px", marginLeft: "auto" }}>
          <a
            href="https://ankurshinde.com/projects"
            target="_self"
            className="nav-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "inline-block", flexShrink: 0 }}
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
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
