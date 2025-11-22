export function flattenStaticAnalysis(staticAnalysis = {}) {
  // staticAnalysis: { semgrep:[], eslint:[], bandit:[], checkstyle:[] }
  const groups = ["semgrep", "eslint", "bandit", "checkstyle"];
  let items = [];
  groups.forEach((g) => {
    if (Array.isArray(staticAnalysis[g])) {
      staticAnalysis[g].forEach((it) => items.push({ source: g, ...it }));
    }
  });
  return items;
}



