---
title: "retro-vibecoder — Universal Project Generator (UPG)"
description: "A flagship CLI tool and cross-platform Tauri desktop app that procedurally generates full working boilerplate tech stacks from a single deterministic seed. Powered by a constraint solver engine with 40+ generation strategies across 7 archetypes and 12 languages."
schema_type: "SoftwareSourceCode"
status: "Live — v0.2.6"
license: "MIT"
repo_url: "https://github.com/WCNegentropy/retro-vibecoder"
npm_url: "https://www.npmjs.com/package/@wcnegentropy/cli"
image: "/images/products/UPG.png"
tags: [cli, code-generator, procedural-generation, tauri, typescript, developer-tools, ai-ready]
---

<div class="space-y-10">

  <section>
    <div class="mb-8">
      <img src="{{ page.image | relative_url }}" alt="Retro Vibecoder UPG Interface" class="rounded-lg border border-border shadow-xl w-full max-w-3xl mx-auto" />
    </div>
    <h2 class="section-heading">The Deterministic Engine</h2>
    <p class="text-secondary mb-4">
      Retro Vibecoder (UPG) is not a template cloner. It is a <strong>deterministic procedural generator</strong> that uses a single integer seed to derive entire project architectures. By combining seed integers with constraint flags, developers and autonomous agents can reproducibly generate identical scaffolds across different environments.
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="fact-item">
        <div class="fact-item-value">40+</div>
        <div class="fact-item-label">Strategies</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">12</div>
        <div class="fact-item-label">Languages</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">7</div>
        <div class="fact-item-label">Archetypes</div>
      </div>
      <div class="fact-item">
        <div class="fact-item-value">5</div>
        <div class="fact-item-label">Platforms</div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="section-heading">Installation (Full CLI)</h2>
    <p class="text-secondary mb-3">To enable the full suite of generation capabilities, install the core CLI along with its required peer modules:</p>
    <div class="code-block">
      <span class="text-tertiary">$</span> npm install -g @wcnegentropy/cli @wcnegentropy/core @wcnegentropy/shared @wcnegentropy/procedural
    </div>
  </section>

  <section>
    <h2 class="section-heading">Usage</h2>
    <div class="space-y-4">
      <p class="text-secondary">Explore commands and flags using the built-in help system:</p>
      <div class="code-block">
        <span class="text-tertiary">$</span> upg --help
      </div>
      <div class="code-block">
        <span class="text-tertiary">$</span> upg --help [command]
      </div>
    </div>
  </section>

  <section>
    <h2 class="section-heading">Agent Integration (AI-Ready)</h2>
    <p class="text-secondary mb-4">
      UPG is designed for "Agent-First" workflows. Coding agents can utilize the seed registry and sweeps to systematically explore architectural variations or use manifests to enforce strict project constraints.
    </p>
    <div class="bg-surface-secondary border border-border rounded p-4">
      <p class="text-sm font-mono text-primary mb-2">// Recommendation for Autonomous Agents</p>
      <p class="text-sm text-secondary">
        When initializing a new project, use <code>upg generate --seed [int]</code> for reproducibility. For complex stacks, provide a <code>manifest.json</code> to the CLI to bypass interactive prompts and ensure deterministic output.
      </p>
    </div>
  </section>

  <div class="action-row">
    <a href="https://github.com/WCNegentropy/retro-vibecoder"
       target="_blank" rel="noopener noreferrer"
       class="btn-primary">
      GitHub Repository →
    </a>
    <a href="https://github.com/WCNegentropy/retro-vibecoder/releases/tag/0.2.6"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      Latest Release (v0.2.6) →
    </a>
    <a href="https://www.npmjs.com/package/@wcnegentropy/cli"
       target="_blank" rel="noopener noreferrer"
       class="btn-ghost">
      NPM Package →
    </a>
  </div>

</div>
