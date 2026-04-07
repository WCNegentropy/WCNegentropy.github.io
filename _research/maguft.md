---
title: "MAGUFT — Magnetic Rotation Grand Unified Field Theory"
description: "A unified theoretical framework modeling quantum mechanics and general relativity as orthogonal projections of a single entropy-driven master equation on the metric-valued density field $\\Phi^{ab} = \\sqrt{\\rho}\\,g^{ab}$, with active Papers 1–3, retroactive addenda, and an installable symbolic-numeric research package."
schema_type: "ScholarlyArticle"
status: "Active Research"
license: "CC BY 4.0 (Research) / AGPLv3 (Software)"
repo_url: "https://github.com/WCNegentropy/MAGUFT"
tags: [unified-field-theory, quantum-mechanics, general-relativity, entropy, tensor-fields, sympy]
---

<div class="space-y-10">

  <section>
    <h2 class="section-heading">Current State</h2>
    <ul class="space-y-2 text-secondary">
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Track</span>
        <span>Papers 1–2 (foundation), current Paper 3, and retroactive addenda</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Tooling</span>
        <span>Installable SymPy/SciPy/JAX package with Pydantic schemas, provenance capture, claim traceability, and CLI experiment runners</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Tests</span>
        <span>31 migrated tests plus runnable alpha, mass-ratio, and spin-statistics validation experiments</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Governance</span>
        <span>Roadmap, verification map, claim traceability, citation metadata, and artifact status documents are maintained in-repo</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Citation</span>
        <span>Repository citation version 1.0.0 (2026-03-22) by Mikeal Clark / WCNEGENTROPY HOLDINGS LLC</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Archive</span>
        <span>Superseded earlier Papers 3–4 in <code class="text-accent">/research/legacy</code></span>
      </li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Research Papers &amp; Canon</h2>
    <ul class="space-y-3 text-secondary">
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Paper 1</span>
        <span>Active foundation paper in <code class="text-accent">research/maguft_paper1.pdf</code> with a separate Paper 1 addendum applying current Paper 3 corrections retroactively.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Paper 2</span>
        <span>Second active foundation paper in <code class="text-accent">research/maguft_paper2.pdf</code>, also updated by a dedicated Paper 2 addendum.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Paper 3</span>
        <span>The current direction is published as <code class="text-accent">research/MAGUFT_Paper3_Final.pdf</code>, with Markdown and TeX sources preserved alongside the PDF.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Retroactive Analysis</span>
        <span><code class="text-accent">MAGUFT_Retroactive_Analysis.md</code> consolidates how the active Paper 3 reshapes the Papers 1–2 program.</span>
      </li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Key Predictions</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <div class="fact-item">
        <div class="fact-item-value">137</div>
        <div class="fact-item-label">$\alpha^{-1}$ scale from $2/(3K_2)$</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">4.185×10⁻²³</div>
        <div class="fact-item-label">$m_e/m_P$ target hierarchy</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">95.1%</div>
        <div class="fact-item-label">Dark-sector degree fraction</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">N = 3</div>
        <div class="fact-item-label">$N_{\text{phys}}(D=4)=1 + D(D-3)/2$</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">ℤ₃</div>
        <div class="fact-item-label">Framing classes / generations</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">SU(3)×SU(2)×U(1)</div>
        <div class="fact-item-label">Gauge structure from $\Phi^{ab}$</div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="section-heading">Verification Map</h2>
    <ul class="space-y-2 text-secondary">
      <li><strong class="text-primary">CLAIM-P3-K1-001</strong> — $K_1 = 2/3$ exact; symbolic verification planned, numerical pathway in progress.</li>
      <li><strong class="text-primary">CLAIM-P3-ALPHA-001</strong> — $\alpha = 2/(3K_2)$; numerical pipeline implemented, observational comparison planned.</li>
      <li><strong class="text-primary">CLAIM-P3-MASS-001</strong> — $m_e = m_P \times f(K\text{-integrals})$; numerical hierarchy pipeline implemented.</li>
      <li><strong class="text-primary">CLAIM-P3-SPIN-001</strong> — spin-statistics from Hopf index; topological verification implemented.</li>
      <li><strong class="text-primary">CLAIM-P3-N3-001</strong> — $N=3$ from $N_{\text{phys}}(D=4)$; exact algebraic identity.</li>
      <li><strong class="text-primary">CLAIM-P3-GEN-001</strong> — three generations from framing class $k \bmod 3$; topological verification in progress.</li>
      <li><strong class="text-primary">CLAIM-P3-GAUGE-001</strong> — gauge-group emergence from $\Phi^{ab}$ decomposition; symbolic verification planned.</li>
      <li><strong class="text-primary">CLAIM-P3-DARK-001</strong> — 95.1% dark-sector fraction; numerical pathway implemented with Planck comparison planned.</li>
      <li><strong class="text-primary">CLAIM-P3-CMB-001</strong> — toroidal-topology explanation for low-$\ell$ CMB anomalies; numerical pathway in progress.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Computational Framework</h2>
    <div class="code-block">
      <span class="text-tertiary">$</span> cd software &amp;&amp; pip install -e ".[dev]"
    </div>
    <ul class="mt-4 space-y-2 text-secondary">
      <li>Package modules cover symbolic derivations, vortex profiles, topology, observables, ODE/root-finding/fixed-point solvers, and JAX-backed self-consistent workflows.</li>
      <li>Experiment entrypoints currently include alpha estimation, mass-ratio sensitivity, and spin-statistics validation.</li>
      <li>Pydantic schemas and provenance tooling are intended to bind paper claims to configs, runs, and generated artifacts as the claim registry matures.</li>
      <li>The active software tree also includes cross-project magnetic-fluid tooling and visualization work that overlaps with the MagRot plasma pipeline.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Roadmap Status</h2>
    <ul class="space-y-2 text-secondary">
      <li><strong class="text-primary">✅ Phases 0–2:</strong> governance, package skeleton, CI, core script migration, experiment wrappers, and migrated tests are in place.</li>
      <li><strong class="text-primary">🔲 Phase 3:</strong> machine-readable claim registry and provenance layer.</li>
      <li><strong class="text-primary">🔲 Phase 4:</strong> optimization and heavier JAX/SciPy compute workflows.</li>
      <li><strong class="text-primary">🔲 Phase 5:</strong> human-reviewed LLM-assisted orchestration.</li>
      <li><strong class="text-primary">🔲 Phase 6:</strong> visualization dashboards and public-facing interactive tools.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Extended Research Scope</h2>
    <ul class="space-y-2 text-secondary">
      <li><strong class="text-primary">Weather modeling:</strong> <code class="text-accent">MAGUFT_Weather_Spec_v1.1</code> and related simulation work extend the framework into atmospheric dynamics.</li>
      <li><strong class="text-primary">Black-hole / RQG topology:</strong> the repository includes a nested-topology SVG and an interactive black-hole profile artifact for toroidal / RQG exploration.</li>
      <li><strong class="text-primary">Relativistic corrections:</strong> the research tree carries a TOV correction figure alongside the active paper set.</li>
      <li><strong class="text-primary">MagRot connection:</strong> MAGUFT’s software track includes magnetic-fluid tooling that directly overlaps with the MagRot validation ecosystem.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Licensing</h2>
    <p class="leading-relaxed text-secondary">
      Split licensing model: <strong class="text-primary">CC BY 4.0</strong> for research papers and documentation,
      <strong class="text-primary">AGPLv3</strong> for software and computational tools.
      Commercial licensing available from WCNEGENTROPY HOLDINGS LLC.
    </p>
  </section>

  <div class="action-row">
    <a href="https://github.com/WCNegentropy/MAGUFT"
       target="_blank" rel="noopener noreferrer"
       class="btn-primary">
      GitHub Repository →
    </a>
    <a href="https://github.com/WCNegentropy/MAGUFT/blob/main/research/maguft_paper1.pdf"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Read Paper 1 →
    </a>
    <a href="https://github.com/WCNegentropy/MAGUFT/blob/main/research/maguft_paper2.pdf"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Read Paper 2 →
    </a>
    <a href="https://github.com/WCNegentropy/MAGUFT/blob/main/research/MAGUFT_Paper3_Final.pdf"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Read Paper 3 →
    </a>
  </div>

</div>
