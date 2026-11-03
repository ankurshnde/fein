"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  FileCode2, 
  Terminal,
  Cpu,
  GitBranch,
  FileCheck
} from "lucide-react";

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsData = [
    {
      step: 1,
      title: "Bilateral Commitment Lock",
      subtitle: "Pre-execution atomic binding",
      desc: "Buyer (Org A) commits capital ceiling while Seller (Org B) commits work specification and deliverable hash into the shared Transaction Control Block (TCB). Neither party has spent or exposed private runtimes.",
      tid: "TID-0x9F42A1...C8E",
      status: "COMMITMENTS_LOCKED",
      buyerCommitment: "$50,000 USD (Authorized via Org A Key)",
      sellerCommitment: "SHA-256 Digest of Target Model Artifact",
      thresholdState: "0 of 3 Signatures Collected"
    },
    {
      step: 2,
      title: "Independent Criteria Verification",
      subtitle: "Objective runtime verification",
      desc: "Seller delivers work output directly to the agreed-upon Independent Verifier. The verifier validates the deliverable against the pre-agreed contractual criteria without accessing Org A's internal prompts or Org B's proprietary weights.",
      tid: "TID-0x9F42A1...C8E",
      status: "VERIFICATION_PASSED",
      buyerCommitment: "Locked in 2-of-3 MPC Escrow",
      sellerCommitment: "Hash Match Confirmed (100% Criteria Met)",
      thresholdState: "2 of 3 Signatures Ready (Seller + Verifier)"
    },
    {
      step: 3,
      title: "Atomic DvP Conditional Settlement",
      subtitle: "Delivery versus Payment execution",
      desc: "Upon valid threshold authorization (2-of-3 MPC), the Settlement Coordinator acts as an atomic Two-Phase Commit (2PC) arbiter: emitting an immutable audit receipt, committing the token state log, and triggering payment rail execution (AP2/SWIFT).",
      tid: "TID-0x9F42A1...C8E",
      status: "ATOMIC_SETTLED_DVP",
      buyerCommitment: "Funds Dispatched to Org B via AP2 Rail",
      sellerCommitment: "Work Released & Verified by Org A",
      thresholdState: "DvP Arbiter Finalized (Receipt #RCP-7749)"
    }
  ];

  const currentStepInfo = stepsData[activeStep - 1];

  return (
    <>
      <Navbar />

      <main style={{ paddingBottom: "96px" }}>
        {/* HERO SECTION */}
        <section id="overview" style={{ paddingTop: "64px", paddingBottom: "72px" }}>
          <div className="wrap">
            {/* Metadata Pill */}
            <div style={{ marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              <span className="badge-mono accent">
                <span style={{ width: "6px", height: "6px", background: "#00d294", display: "inline-block" }} />
                SPECIFICATION v0.1 • ARCHITECTURAL DRAFT
              </span>
              <span className="badge-mono">
                FEIN.ANKURSHINDE.COM
              </span>
              <span className="badge-mono">
                MIT MEDIA LAB / PROJECT NANDA CONTEXT
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.8rem, 7vw, 4.8rem)",
                lineHeight: "1.05",
                marginBottom: "16px",
                letterSpacing: "-0.03em"
              }}
            >
              FEIN
            </h1>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
                color: "var(--muted)",
                marginBottom: "28px",
                lineHeight: "1.25"
              }}
            >
              Financial Enterprise Intelligence Network
            </p>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
                maxWidth: "760px",
                marginBottom: "36px",
                color: "var(--foreground)"
              }}
            >
              A minimal, sovereign coordination protocol enabling bilateral commitment, cryptographic verification, 
              and conditional atomic settlement between independent, sovereign enterprise AI agents.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", marginBottom: "48px" }}>
              <div className="technical-btn-wrap">
                <div className="btn-corner tl" />
                <div className="btn-corner tr" />
                <div className="btn-corner bl" />
                <div className="btn-corner br" />
                <a href="#protocol" className="btn btn-primary">
                  Explore Protocol Flow <ArrowRight size={14} />
                </a>
              </div>

              <div className="technical-btn-wrap">
                <div className="btn-corner tl" />
                <div className="btn-corner tr" />
                <div className="btn-corner bl" />
                <div className="btn-corner br" />
                <a href="#architecture" className="btn">
                  System Architecture
                </a>
              </div>

              <div className="technical-btn-wrap">
                <div className="btn-corner tl" />
                <div className="btn-corner tr" />
                <div className="btn-corner bl" />
                <div className="btn-corner br" />
                <a 
                  href="https://github.com/ankurshnde/fein" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  GitHub Source <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                borderTop: "1px solid var(--border)",
                paddingTop: "24px"
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                  Autonomous Topology
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>
                  Sovereign Domestic Runtimes
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                  Custody & Escrow
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>
                  Stateless 2-of-3 MPC Threshold
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                  Settlement Arbiter
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>
                  Atomic Delivery vs Payment (DvP)
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                  Target Rails
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>
                  AP2 / SWIFT / RTGS Rails
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 CORE PILLARS */}
        <section style={{ padding: "64px 0", borderTop: "1px solid var(--border)", background: "rgba(0,0,0,0.01)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "32px" }}>
              <span className="badge-mono">THE PROBLEM & THE MECHANISM</span>
              <h2 style={{ fontSize: "2.4rem", marginTop: "12px", marginBottom: "12px" }}>
                Eliminating Asymmetric Execution Risk
              </h2>
              <p style={{ maxWidth: "700px", color: "var(--muted)", fontSize: "15px", lineHeight: "1.6" }}>
                When sovereign AI agents negotiate contracts, conventional trust breaks down. 
                Paying upfront risks non-delivery; delivering upfront risks non-payment. 
                FEIN bridges this verification gap without compromising enterprise data sovereignty.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Pillar 1 */}
              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Pillar 01</span>
                  <span>TCB Contract</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <Lock size={18} style={{ color: "var(--foreground)" }} />
                  <h3 style={{ fontSize: "1.45rem", margin: 0 }}>Bilateral Commitment</h3>
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)" }}>
                  Both the Buyer (capital allocation) and Seller (deliverable specification digest) lock binding 
                  commitments into a shared Transaction Control Block (TCB) before any compute task is executed.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Pillar 02</span>
                  <span>Independent Evaluator</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <ShieldCheck size={18} style={{ color: "var(--foreground)" }} />
                  <h3 style={{ fontSize: "1.45rem", margin: 0 }}>Cryptographic Verification</h3>
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)" }}>
                  An objective, pre-selected third-party verifier validates the delivered artifact against 
                  formal contractual acceptance criteria. Internal model weights and confidential prompts remain strictly private.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Pillar 03</span>
                  <span>Atomic DvP Arbiter</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--foreground)" }} />
                  <h3 style={{ fontSize: "1.45rem", margin: 0 }}>Conditional 2-of-3 MPC</h3>
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)" }}>
                  No unilateral movement of funds is possible. Release requires a 2-of-3 threshold signature 
                  conditioned upon successful verification, executing external payment rails atomically like a distributed 2PC commit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROTOCOL VISUALIZER */}
        <section id="protocol" style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "36px" }}>
              <span className="badge-mono accent">INTERACTIVE SIMULATION</span>
              <h2 style={{ fontSize: "2.4rem", marginTop: "12px", marginBottom: "8px" }}>
                Protocol Lifecycle State Machine
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>
                Step through the three phases of bilateral commitment, independent verification, and DvP settlement.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "24px"
              }}
            >
              {stepsData.map((s) => (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`step-card ${activeStep === s.step ? "active" : ""}`}
                >
                  <div style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--muted)", marginBottom: "4px" }}>
                    PHASE 0{s.step}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)" }}>
                    {s.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Step Panel */}
            <div className="technical-panel" style={{ padding: "32px" }}>
              <div className="technical-panel-header">
                <span>SIMULATED RUNTIME STATE • {currentStepInfo.status}</span>
                <span>STEP {currentStepInfo.step} OF 3</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px" }}>
                {/* Left: Step Description */}
                <div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                    {currentStepInfo.title}
                  </h3>
                  <div style={{ fontFamily: "var(--font-code)", fontSize: "12px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px" }}>
                    {currentStepInfo.subtitle}
                  </div>
                  <p style={{ fontSize: "15px", lineHeight: "1.75", marginBottom: "24px", color: "var(--foreground)" }}>
                    {currentStepInfo.desc}
                  </p>

                  <div style={{ display: "flex", gap: "12px" }}>
                    {activeStep > 1 && (
                      <button 
                        onClick={() => setActiveStep(activeStep - 1)}
                        className="btn"
                        style={{ fontSize: "12px", padding: "6px 14px" }}
                      >
                        ← Previous Phase
                      </button>
                    )}
                    {activeStep < 3 && (
                      <button 
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="btn btn-primary"
                        style={{ fontSize: "12px", padding: "6px 14px" }}
                      >
                        Next Phase →
                      </button>
                    )}
                  </div>
                </div>

                {/* Right: Simulated TCB Inspector */}
                <div
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--secondary)",
                    padding: "20px",
                    fontFamily: "var(--font-code)",
                    fontSize: "12px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "8px", marginBottom: "12px", color: "var(--muted)" }}>
                    <span>TRANSACTION CONTROL BLOCK</span>
                    <span>LIVE BUFFER</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                      <span style={{ color: "var(--muted)" }}>TID: </span>
                      <span style={{ fontWeight: 600 }}>{currentStepInfo.tid}</span>
                    </div>

                    <div>
                      <span style={{ color: "var(--muted)" }}>STATUS: </span>
                      <span style={{ color: "#00d294", fontWeight: 600 }}>{currentStepInfo.status}</span>
                    </div>

                    <div>
                      <span style={{ color: "var(--muted)" }}>BUYER COMMITMENT: </span>
                      <div>{currentStepInfo.buyerCommitment}</div>
                    </div>

                    <div>
                      <span style={{ color: "var(--muted)" }}>SELLER COMMITMENT: </span>
                      <div>{currentStepInfo.sellerCommitment}</div>
                    </div>

                    <div>
                      <span style={{ color: "var(--muted)" }}>THRESHOLD STATE: </span>
                      <div>{currentStepInfo.thresholdState}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE & DIAGRAM */}
        <section id="architecture" style={{ padding: "80px 0", borderTop: "1px solid var(--border)", background: "rgba(0,0,0,0.01)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "36px" }}>
              <span className="badge-mono">BLUEPRINT TOPOLOGY</span>
              <h2 style={{ fontSize: "2.4rem", marginTop: "12px", marginBottom: "8px" }}>
                Sovereign Agent Coordination Architecture
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "720px", lineHeight: "1.6" }}>
                Each enterprise operates its own private domestic runtime. Internal models, prompts, and weights 
                never cross the boundary. Coordination occurs strictly through deterministic cryptographic blocks.
              </p>
            </div>

            {/* Architectural Diagram Box */}
            <div className="technical-panel" style={{ padding: "36px 24px", overflowX: "auto" }}>
              <div className="technical-panel-header">
                <span>Figure 1: FEIN Architectural Schematic</span>
                <span>Ref: docs/02-architecture.md</span>
              </div>

              {/* Clean Schematic SVG Flow */}
              <div style={{ minWidth: "680px", margin: "20px auto", textAlign: "center" }}>
                <svg viewBox="0 0 760 380" style={{ width: "100%", height: "auto", maxHeight: "420px" }}>
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor" />
                    </marker>
                  </defs>

                  {/* Org A */}
                  <rect x="40" y="30" width="180" height="70" fill="var(--card)" stroke="var(--foreground)" strokeWidth="1.2" />
                  <text x="130" y="60" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="13" fontWeight="600">Org A (Buyer)</text>
                  <text x="130" y="80" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="11">Domestic Runtime</text>

                  {/* Org B */}
                  <rect x="540" y="30" width="180" height="70" fill="var(--card)" stroke="var(--foreground)" strokeWidth="1.2" />
                  <text x="630" y="60" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="13" fontWeight="600">Org B (Seller)</text>
                  <text x="630" y="80" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="11">Domestic Runtime</text>

                  {/* Upstream Handshake */}
                  <path d="M 220 50 L 540 50" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                  <text x="380" y="42" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="10">Negotiation (A2A) / Discovery (NANDA)</text>

                  {/* Transaction Control Block */}
                  <rect x="260" y="100" width="240" height="85" fill="var(--secondary)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <text x="380" y="125" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="12" fontWeight="600">Transaction Control Block (TCB)</text>
                  <text x="380" y="145" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="10">• TID • Contract Hash • TTL</text>
                  <text x="380" y="162" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="10">• Verifier ID • Risk-Ceiling (TO-TS)</text>

                  {/* Commitments to TCB */}
                  <path d="M 130 100 L 130 142 L 260 142" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />
                  <text x="190" y="134" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="10">Lock Capital</text>

                  <path d="M 630 100 L 630 142 L 500 142" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />
                  <text x="570" y="134" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="10">Lock Deliverable Hash</text>

                  {/* Escrow (2-of-3 MPC) */}
                  <rect x="260" y="215" width="240" height="55" fill="var(--card)" stroke="var(--foreground)" strokeWidth="1.2" />
                  <text x="380" y="238" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="12" fontWeight="600">Escrow (Stateless 2-of-3 MPC)</text>
                  <text x="380" y="255" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="10">Buyer + Seller + Selected Verifier</text>

                  <path d="M 380 185 L 380 215" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />

                  {/* Settlement Coordinator */}
                  <rect x="260" y="295" width="240" height="55" fill="var(--card)" stroke="var(--foreground)" strokeWidth="1.2" />
                  <text x="380" y="318" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="12" fontWeight="600">Settlement Coordinator</text>
                  <text x="380" y="335" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-code)" fontSize="10">Atomic DvP Arbiter (Distributed 2PC)</text>

                  <path d="M 380 270 L 380 295" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />

                  {/* Outputs */}
                  <path d="M 260 322 L 130 322 L 130 355" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />
                  <rect x="70" y="355" width="120" height="25" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
                  <text x="130" y="371" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="10">Audit Receipt</text>

                  <path d="M 380 350 L 380 370" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />
                  <rect x="320" y="355" width="120" height="25" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
                  <text x="380" y="371" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="10">State Token Log</text>

                  <path d="M 500 322 L 630 322 L 630 355" stroke="var(--foreground)" strokeWidth="1.2" markerEnd="url(#arrow)" />
                  <rect x="560" y="355" width="140" height="25" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
                  <text x="630" y="371" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-code)" fontSize="10">AP2 Payment Execution</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* BOUNDARIES / WHAT FEIN IS NOT */}
        <section style={{ padding: "64px 0", borderTop: "1px solid var(--border)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "32px" }}>
              <span className="badge-mono">ARCHITECTURAL BOUNDARIES</span>
              <h2 style={{ fontSize: "2.4rem", marginTop: "12px", marginBottom: "8px" }}>
                What FEIN Deliberately Excludes
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>
                To avoid architectural bloat and maintain a sharp, auditable surface, FEIN strictly delegates non-core tasks.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Excluded 01</span>
                  <span>Delegated Upstream</span>
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>No Counterparty Discovery</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--muted)" }}>
                  FEIN does not catalog, search, or index agents. Discovery is handled upstream via public agent directories 
                  such as the <strong>Project NANDA Index</strong>.
                </p>
              </div>

              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Excluded 02</span>
                  <span>Delegated Upstream</span>
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>No Bilateral Negotiation</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--muted)" }}>
                  FEIN is not a chat protocol or haggling engine. Negotiation is handled through direct Agent-to-Agent (A2A) 
                  dialogue before calling the FEIN commitment lock.
                </p>
              </div>

              <div className="technical-panel">
                <div className="technical-panel-header">
                  <span>Excluded 03</span>
                  <span>Delegated Downstream</span>
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>No Proprietary Payment Rails</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--muted)" }}>
                  FEIN does not mint speculative coins or custody fiat banking deposits. Settlement signals are routed directly 
                  to existing payment rails (AP2, FedNow, RTGS, or SWIFT).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS TABLE */}
        <section id="specs" style={{ padding: "80px 0", borderTop: "1px solid var(--border)", background: "rgba(0,0,0,0.01)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "32px" }}>
              <span className="badge-mono">SPECIFICATION REFERENCE</span>
              <h2 style={{ fontSize: "2.4rem", marginTop: "12px", marginBottom: "8px" }}>
                Transaction Control Block (TCB) Schema
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>
                Field definitions for the bilateral coordinator descriptor (specs/tcb-fields.md).
              </p>
            </div>

            <div className="technical-panel" style={{ padding: "0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "1.5px solid var(--border)", fontFamily: "var(--font-code)", background: "var(--secondary)" }}>
                    <th style={{ padding: "14px 20px" }}>Field</th>
                    <th style={{ padding: "14px 20px" }}>Type</th>
                    <th style={{ padding: "14px 20px" }}>Description</th>
                    <th style={{ padding: "14px 20px" }}>Enforcement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", fontWeight: 600 }}>TID</td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", color: "var(--muted)" }}>bytes32</td>
                    <td style={{ padding: "14px 20px" }}>Unique collision-resistant transaction identifier.</td>
                    <td style={{ padding: "14px 20px", color: "var(--muted)" }}>Deterministic Hash</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", fontWeight: 600 }}>contract_hash</td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", color: "var(--muted)" }}>bytes32</td>
                    <td style={{ padding: "14px 20px" }}>Cryptographic digest of negotiated contract terms and acceptance criteria.</td>
                    <td style={{ padding: "14px 20px", color: "var(--muted)" }}>Bilateral Signature</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", fontWeight: 600 }}>verifier_id</td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", color: "var(--muted)" }}>did:key</td>
                    <td style={{ padding: "14px 20px" }}>Designated independent verification runtime DID or public key.</td>
                    <td style={{ padding: "14px 20px", color: "var(--muted)" }}>Mutual Agreement</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", fontWeight: 600 }}>ttl</td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", color: "var(--muted)" }}>uint64 (timestamp)</td>
                    <td style={{ padding: "14px 20px" }}>Time-To-Live expiration timestamp for commitment cancellation / refund.</td>
                    <td style={{ padding: "14px 20px", color: "var(--muted)" }}>Clock Arbiter</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", fontWeight: 600 }}>risk_ceiling</td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-code)", color: "var(--muted)" }}>tuple(TO, TS)</td>
                    <td style={{ padding: "14px 20px" }}>Financial and operational tolerance limits agreed between counterparty agents.</td>
                    <td style={{ padding: "14px 20px", color: "var(--muted)" }}>Escrow Enforcement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid var(--border)", paddingTop: "48px", marginTop: "32px" }}>
          <div className="wrap">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "28px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "6px" }}>
                  FEIN — Financial Enterprise Intelligence Network
                </div>
                <p style={{ fontSize: "13px", color: "var(--muted)", maxWidth: "440px", lineHeight: "1.6" }}>
                  An architectural specification for sovereign enterprise agent coordination. 
                  Designed and authored by <a href="https://ankurshinde.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Ankur Shinde</a> as part of final-year engineering research at SPPU in context with Project NANDA (MIT Media Lab).
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-code)", fontSize: "12px" }}>
                <a href="https://ankurshinde.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
                  ankurshinde.com ↗
                </a>
                <a href="https://github.com/ankurshnde/fein" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
                  github.com/ankurshnde/fein ↗
                </a>
                <a href="https://x.com/ankurshn" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>
                  x.com/@ankurshn ↗
                </a>
                <span style={{ color: "var(--muted)", marginTop: "8px" }}>
                  Domain target: fein.ankurshinde.com
                </span>
              </div>
            </div>

            <div style={{ borderTop: "1px dashed var(--border)", marginTop: "36px", paddingTop: "18px", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--muted)", fontFamily: "var(--font-code)" }}>
              <span>MIT LICENSE • OPEN SPECIFICATION</span>
              <span>BRUTALIST VELLUM / BLUEPRINT THEME</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
