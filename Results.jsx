import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IssuesList from "../components/IssuesList";
import CodeViewer from "../components/CodeViewer";
import { flattenStaticAnalysis } from "../utils/formatIssues";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">No results available.</p>
          <button onClick={() => navigate("/")} className="px-4 py-2 rounded bg-indigo-600 text-white">Go back</button>
        </div>
      </div>
    );
  }

  const staticAnalysis = state.staticAnalysis || {};
  const aiAnalysis = state.aiAnalysis || {};
  const originalCode = state.originalCode || "";
  const improvedCode = aiAnalysis.improvedCode || "";

  const issues = flattenStaticAnalysis(staticAnalysis);

  return (
    <div className="min-h-screen py-10 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Scan Results</h1>
          <div className="flex gap-3">
            <button onClick={() => navigate("/")} className="px-4 py-2 rounded border">New scan</button>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(improvedCode)}`}
              download="improved_code.txt"
              className="px-4 py-2 rounded bg-gradient-to-r from-gradientFrom to-gradientTo text-white"
            >
              Download Fix
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CodeViewer original={originalCode} improved={improvedCode} />
            <div className="mt-6 bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">AI Explanation</h3>
              <pre className="whitespace-pre-wrap text-sm text-slate-700">{aiAnalysis.explanation || "No explanation provided."}</pre>
            </div>
          </div>

          <div>
            <IssuesList items={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

