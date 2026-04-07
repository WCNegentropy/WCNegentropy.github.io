---
title: "MagRot — Rotational-Vector Framework for Magnetic Field Dynamics"
description: "A dimensionless rotational parameter R(x) encoding local tendency toward collapse, expansion, or equilibrium in magnetic field configurations."
schema_type: "ScholarlyArticle"
status: "Active R&D — v2 Thermodynamic Framework"
license: "AGPLv3 (Software) / CC BY 4.0 (Research)"
repo_url: "https://github.com/WCNegentropy/magrot"
tags: [magnetic-fields, plasma-physics, thermodynamics, entropy, tokamak, z-pinch]
---

<div class="mx-auto max-w-4xl px-6 py-16">
  <div class="flex items-start justify-between mb-6">
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">MagRot</h1>
    <span class="text-xs font-mono bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 px-3 py-1.5 rounded">ACTIVE R&D</span>
  </div>
  <p class="text-xl text-slate-700 dark:text-slate-300 mb-8">Rotational-Vector Framework for Magnetic Field Dynamics</p>

  <div class="prose prose-slate dark:prose-invert max-w-none space-y-8">
    <section>
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Overview</h2>
      <p class="text-slate-800 dark:text-slate-300 leading-relaxed">
        MagRot introduces a dimensionless rotational parameter <strong>R(x)</strong> that encodes the local tendency toward collapse, expansion, or equilibrium in magnetic field configurations. Derived from field-line geometry (curvature, tension, pressure balance) rather than raw magnitudes.
      </p>
      <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 mt-4 font-mono text-sm">
        <p class="text-slate-800 dark:text-slate-300">R &lt; 1 → Expanding (outward pressure dominates)</p>
        <p class="text-slate-800 dark:text-slate-300">R = 1 → Equilibrium (curvature-driven tension balances pressure)</p>
        <p class="text-slate-800 dark:text-slate-300">R &gt; 1 → Contracting (inward tension dominates)</p>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Validation</h2>
      <ul class="list-disc pl-6 space-y-2 text-slate-800 dark:text-slate-300">
        <li><strong>Tier 1:</strong> Analytic verification — infinite wire, Z-pinch Bennett, screw pinch, dipole 2D</li>
        <li><strong>Tier 2:</strong> Cross-validation — Earth dipole (R=1.0 at equator), Tokamak (ITER-scale)</li>
        <li><strong>v2 Thermodynamic:</strong> 1D (28/33 checks) and full 3D (26/37 checks) validation suites</li>
        <li><strong>Key result:</strong> Entropy-parameterized Z-pinch converges to R = 1.000000 exactly</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">v2: Thermodynamic State Flow</h2>
      <p class="text-slate-800 dark:text-slate-300 leading-relaxed">
        Version 2 replaces time-based dynamics with entropy-parameterized state evolution. The evolution parameter is entropy produced (σ), not elapsed time (t), yielding guaranteed convergence via the second law.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Licensing</h2>
      <p class="text-slate-800 dark:text-slate-300 leading-relaxed">
        Split licensing model: <strong>AGPLv3</strong> for software and simulators, <strong>CC BY 4.0</strong> for framework specifications, validation reports, and generated results. Commercial licensing available.
      </p>
    </section>

    <div class="flex flex-wrap gap-3 pt-4">
      <a href="https://github.com/WCNegentropy/magrot"
         target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-5 py-3 font-semibold hover:opacity-90 transition-opacity">
        🐙 GitHub Repository →
      </a>
    </div>
  </div>
</div>
