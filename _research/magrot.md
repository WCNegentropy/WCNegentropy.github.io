---
title: "MagRot — Rotational-Vector Framework for Magnetic Field Dynamics"
description: "A magnetic-field dynamics and plasma confinement framework built around four complementary rotational metrics R(x), with validated Z-pinch, tokamak, dipole, and thermodynamic state-flow results across 1D and full 3D suites."
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
    <h2 class="section-heading">Current State</h2>
    <ul class="space-y-2 text-secondary">
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Official Name</span>
        <span>Also published as <strong class="text-primary">MAGROT: Magnetic Generalized Rotation Optimization Tool &amp; Plasma Confinement Framework</strong>.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Versions</span>
        <span>Python package metadata is currently <code class="text-accent">0.2.0-dev</code> (alpha), while the repository citation metadata is version 3.0.0.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Scope</span>
        <span>Full 3D cylindrical field geometry, thermodynamic relaxation, stability analysis, visualization, and validation tooling for magnetic equilibria.</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Connection</span>
        <span>MagRot underpins plasma-style computational validation work that also surfaces in the MAGUFT software track.</span>
      </li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Four Complementary Metrics</h2>
    <ul class="space-y-3 text-secondary">
      <li><strong class="text-primary">Metric A — Curvature Ratio</strong> <code class="text-accent">R<sub>κ</sub> = κ / κ<sub>eq</sub></code>; the best overall performer for equilibrium classification.</li>
      <li><strong class="text-primary">Metric B — Collapse Indicator</strong> <code class="text-accent">R<sub>C</sub> = 1 + C(x)</code>; physically grounded and sensitive to collapse tendency.</li>
      <li><strong class="text-primary">Metric C — Misalignment</strong> <code class="text-accent">R<sub>J</sub> = ‖B × curl(B)‖ / ‖B‖²</code>; usable directly from the field.</li>
      <li><strong class="text-primary">Universal Metric — Force Ratio</strong> <code class="text-accent">‖f<sub>inward</sub>‖ / ‖f<sub>outward</sub>‖</code>; self-normalizing and directly tied to the stress balance interpretation of <code class="text-accent">R = 1</code>.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Validation</h2>
    <ul class="space-y-2 text-secondary">
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Tier 1</span>
        <span>Analytic: infinite wire, Z-pinch Bennett, screw pinch, dipole 2D</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Tier 2</span>
        <span>Cross-validation: Earth dipole (R=1.0 at equator), Tokamak (ITER-scale)</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">v2 Suite</span>
        <span>1D (28/33 checks) and full 3D (26/37 checks) validation suites</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">Result</span>
        <span>Entropy-parameterized Z-pinch converges to R = 1.000000 exactly, versus R = 1.05 after 15 periods for the legacy time-based method</span>
      </li>
      <li class="flex gap-3">
        <span class="meta-label mt-0.5 flex-shrink-0 text-tertiary">3D Findings</span>
        <span>Axisymmetric angular spread drops to std = 0.00, div(B) stays near machine precision, and the 3D Hessian classification shifts from saddle-point to minimum</span>
      </li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">v2: Thermodynamic State Flow</h2>
    <p class="leading-relaxed text-secondary">
      Version 2 replaces time-based dynamics with entropy-parameterized state evolution. The evolution parameter is entropy produced (σ), not elapsed time (t), yielding guaranteed convergence via the second law.
    </p>
    <ul class="mt-4 space-y-2 text-secondary">
      <li>Free-energy functional <code class="text-accent">F[B, p]</code> connects <code class="text-accent">|R - 1|</code> to local free-energy density.</li>
      <li>Entropy production is tracked as <code class="text-accent">ṡ(x) = η|J|²/T</code> using a Spitzer-resistivity model.</li>
      <li>Constraint conservation covers magnetic helicity <code class="text-accent">K</code>, flux <code class="text-accent">Φ</code>, and mass <code class="text-accent">M</code>.</li>
      <li>Relaxation engines include steepest descent, L-BFGS, and Onsager linear-response schemes.</li>
      <li>Entropic hypothesis tests A–D classify whether <code class="text-accent">R = 1</code> behaves as an entropy maximum, negentropic state, or saddle point.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Engineering Robustness</h2>
    <ul class="space-y-2 text-secondary">
      <li>Epsilon-floor regularization removes <code class="text-accent">R_universal</code> overflow.</li>
      <li>Conservative <code class="text-accent">J × B</code> force computation avoids catastrophic cancellation.</li>
      <li>Dynamic <code class="text-accent">L₀ = min(1/κ, L_char)</code> stabilizes Metric B near boundaries.</li>
      <li>Softened dipole handling removes origin masking artifacts.</li>
      <li>Damped dynamics demonstrates resistive relaxation toward <code class="text-accent">R = 1</code>.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Quick Start</h2>
    <div class="code-block">
      <span class="text-tertiary">$</span> pip install -e .
    </div>
    <pre class="code-block mt-4 overflow-x-auto text-sm"><code>from magrot.fields.grid import CylindricalGrid
from magrot.fields.analytic import field_zpinch_bennett
from magrot.rotation.metrics import compute_all_metrics
import numpy as np

grid = CylindricalGrid(Nr=80, Ntheta=32, Nz=20, r_range=(0.0003, 0.05))
B, p_mat = field_zpinch_bennett(grid, I=1e4, a=0.01)

def kappa_eq(g):
    return np.full(g.R.shape, 1.0 / 0.01)

results = compute_all_metrics(B, grid, p_mat=p_mat,
                              kappa_eq_func=kappa_eq, L_char=0.01)</code></pre>
  </section>

  <section>
    <h2 class="section-heading">Future Directions</h2>
    <ul class="space-y-2 text-secondary">
      <li>Mode-resolved 3D stability for sausage, kink, and elliptical perturbations.</li>
      <li>Kinetic-energy tracking for stricter total free-energy monotonicity.</li>
      <li>Expanded tokamak 3D applications, including Solov'ev equilibria, q₀ tuning, and disruption precursors.</li>
      <li>Non-axisymmetric equilibria such as stellarators and magnetic-island geometries.</li>
      <li>Geometric-algebra unification of static and dynamic R, plus real-time fusion-control applications.</li>
    </ul>
  </section>

  <section>
    <h2 class="section-heading">Licensing</h2>
    <p class="leading-relaxed text-secondary">
      Split licensing model: <strong class="text-primary">AGPLv3</strong> for software and simulators,
      <strong class="text-primary">CC BY 4.0</strong> for framework specifications, validation reports, and generated results.
      Commercial licensing available.
    </p>
  </section>

  <div class="action-row">
    <a href="https://github.com/WCNegentropy/magrot"
       target="_blank" rel="noopener noreferrer"
       class="btn-primary">
      GitHub Repository →
    </a>
    <a href="https://github.com/WCNegentropy/magrot/blob/main/docs/MAGROT_Framework_Spec.md"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Framework Spec →
    </a>
    <a href="https://github.com/WCNegentropy/magrot/blob/main/docs/MagRot_Tokamak_Validation_Report_v1.pdf"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Tokamak Validation →
    </a>
  </div>

</div>
