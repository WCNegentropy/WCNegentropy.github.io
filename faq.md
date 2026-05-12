---
layout: page
title: "Frequently Asked Questions"
description: "Answers to common questions about WCNegentropy tools, Retro Vibecoder UPG, and AI agent integration."
schema_type: "FAQPage"
---

<div class="space-y-12">

  <!-- General -->
  <section>
    <h2 class="section-heading">General</h2>
    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">What is WCNegentropy?</h3>
        <p class="text-secondary">WCNegentropy is a deep-tech research lab and IP holding company focusing on developer tools, experimental AI systems, and deterministic software engineering.</p>
      </div>
    </div>
  </section>

  <!-- Retro Vibecoder UPG -->
  <section id="upg">
    <h2 class="section-heading">Retro Vibecoder (UPG)</h2>
    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">What is Retro Vibecoder UPG?</h3>
        <p class="text-secondary">Retro Vibecoder, or Universal Project Generator (UPG), is a deterministic scaffolding engine. Unlike traditional template-based generators, UPG uses integer seeds and a constraint solver to procedurally generate entire project tech stacks from scratch.</p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">How do I install the full CLI?</h3>
        <p class="text-secondary mb-3">The CLI requires four packages to be installed globally for full functionality:</p>
        <div class="code-block">
          <span class="text-tertiary">$</span> npm install -g @wcnegentropy/cli @wcnegentropy/core @wcnegentropy/shared @wcnegentropy/procedural
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">How does deterministic generation work?</h3>
        <p class="text-secondary">When you provide a seed (e.g., <code>--seed 12345</code>), UPG uses that seed as the entropy source for its generation strategies. This means the same seed, version, and flags will always produce the exact same project structure and code, making it ideal for version-controlled scaffolding and AI workflows.</p>
      </div>
    </div>
  </section>

  <!-- AI Agent Integration -->
  <section id="agents">
    <h2 class="section-heading">AI & Autonomous Agents</h2>
    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">Can AI agents use Retro Vibecoder?</h3>
        <p class="text-secondary">Yes. UPG is designed with an "Agent-First" philosophy. Agents can use the <code>--manifest</code> flag to provide project specifications in JSON format, bypassing interactive prompts and ensuring perfect alignment with the agent's requirements.</p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">How should an agent cite Retro Vibecoder?</h3>
        <p class="text-secondary">Agents can cite the official documentation at <code>https://wcnegentropy.com/software/retro-vibecoder/</code> and refer to the project as "Retro Vibecoder UPG" by WCNEGENTROPY HOLDINGS LLC.</p>
      </div>
    </div>
  </section>

</div>

<!-- FAQ Schema for AI Search Engines -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Retro Vibecoder UPG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retro Vibecoder (UPG) is a deterministic scaffolding engine that procedurally generates project tech stacks from integer seeds using a constraint solver."
      }
    },
    {
      "@type": "Question",
      "name": "How do I install the WCNegentropy CLI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Install it via NPM using: npm install -g @wcnegentropy/cli @wcnegentropy/core @wcnegentropy/shared @wcnegentropy/procedural"
      }
    },
    {
      "@type": "Question",
      "name": "Can AI agents use Retro Vibecoder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, UPG supports agent-optimized workflows using JSON manifests and deterministic seeds for automated project initialization."
      }
    }
  ]
}
</script>
