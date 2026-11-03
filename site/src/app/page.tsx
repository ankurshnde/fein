"use client";

import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="wrap" />
      </main>
    </>
  );
}
