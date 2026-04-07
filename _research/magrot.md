---
title: "MagRot — Rotational-Vector Framework for Magnetic Field Dynamics"
description: "A dimensionless rotational parameter R(x) encoding local tendency toward collapse, expansion, or equilibrium in magnetic field configurations. Derived from field-line geometry rather than raw magnitudes."
schema_type: "ScholarlyArticle"
status: "Active R&D — v2 Thermodynamic Framework"
license: "AGPLv3 (Software) / CC BY 4.0 (Research)"
repo_url: "https://github.com/WCNegentropy/magrot"
tags: [magnetic-fields, plasma-physics, thermodynamics, entropy, tokamak, z-pinch]
---

<div class="space-y-10">

  <section>
    <h2 class="section-heading">Rotational Parameter</h2>
    <div class="code-block space-y-1">
      <p>R &lt; 1 → Expanding (outward pressure dominates)</p>
      <p>R = 1 → Equilibrium (curvature-driven tension balances pressure)</p>
      <p>R &gt; 1 → Contracting (inward tension dominates)</p>
    </div>
  </section>

  <section>
    <h2 class="section-heading">Validation</h2>
    <ul class="space-y-2" style="color: var(--text-secondary);">
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0" style="color: var(--text-tertiary);">Tier 1</span>
        <span>Analytic: infinite wire, Z-pinch Bennett, screw pinch, dipole 2D</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0" style="color: var(--text-tertiary);">Tier 2</span>
        <span>Cross-validation: Earth dipole (R=1.0 at equator), Tokamak (ITER-scale)</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0" style="color: var(--text-tertiary);">v2 Suite</span>
        <span>1D (28/33 checks) and full 3D (26/37 checks) validation suites</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0" style="color: var(--text-tertiary);">Result</span>
        <span>Entropy-parameterized Z-pinch converges to R = 1.000000 exactly</span>
      </li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">v2: Thermodynamic State Flow</h2>
    <p class="leading-relaxed" style="color: var(--text-secondary);">
      Version 2 replaces time-based dynamics with entropy-parameterized state evolution. The evolution parameter is entropy produced (σ), not elapsed time (t), yielding guaranteed convergence via the second law.
    </p>
  </section>

  <section>
    <h2 class="section-heading">Licensing</h2>
    <p class="leading-relaxed" style="color: var(--text-secondary);">
      Split licensing model: <strong style="color: var(--text-primary);">AGPLv3</strong> for software and simulators,
      <strong style="color: var(--text-primary);">CC BY 4.0</strong> for framework specifications, validation reports, and generated results.
      Commercial licensing available.
    </p>
  </section>

  <div class="action-row">
    <a href="https://github.com/WCNegentropy/magrot"
       target="_blank" rel="noopener noreferrer"
       class="btn-primary">
      GitHub Repository →
    </a>
  </div>

</div>
