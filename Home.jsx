import React from "react";
import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-gradientFrom to-gradientTo">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <div className="text-white font-bold text-3xl">CodeGuard AI</div>
            <div className="text-white/80 mt-1">Open-source code quality & security scanner</div>
          </div>
          <div className="text-white/90 text-sm">Hackathon — Open Source Mode</div>
        </header>

        <main className="bg-white/20 rounded-3xl p-8 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Scan your code — fast</h2>
              <p className="text-white/80 mb-6">Upload or paste code to get static analysis (Semgrep, ESLint, Bandit) and AI suggested fixes (open-source models).</p>

              <div className="mb-6">
                <FileUpload />
              </div>

              <div className="text-white/90 text-sm">Tip: Backend should return `staticAnalysis`, `aiAnalysis`, and `originalCode` JSON.</div>
            </div>

            <div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

