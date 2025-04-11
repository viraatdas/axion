# Axion

> Where Scientific Thought Meets Formal Proof

Axion is your personal theorem proving lab — a powerful, intuitive platform where scientists and engineers can write down what they want to prove, and instantly see how it can be proven.

Whether you're deriving a formula in physics, sketching a mathematical conjecture, or trying to formalize intuition, Axion takes your ideas — in plain English, LaTeX, or even pseudocode — and translates them into rigorously verified theorems using Lean 4.

## What makes Axion magical

### 🧠 Auto-Formalization
You describe the problem. Axion generates a Lean theorem.

### ⚙️ Proof Synthesis
Axion constructs the proof, step by step, verified by Lean.

### 🧭 Human-Readable Feedback
The platform explains every proof in clear, natural language.

### 🕸 Growing Knowledge Graph
Every verified result is stored in an append-only, queryable theorem repository.

### 💡 Creative Assistance
Get suggestions for generalizations, similar theorems, or fixes if something breaks.

It's like WolframAlpha for formal proof, but beautiful, extensible, and backed by a living mathematical brain.

No more fighting obscure syntax or debugging logic rules — Axion removes the barriers between what you mean and what you can prove. It's a place where reasoning becomes reproducible, proofs become collaborative assets, and formal verification becomes second nature.

## Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- Monaco Editor
- KaTeX for math rendering

### Backend
- FastAPI (Python)
- Lean 4 with mathlib & physicslib
- LLM Integration (GPT-4-turbo, Claude 3)
- PostgreSQL & Vector Database
- Docker for Lean environment

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/axion.git
cd axion

# Install dependencies
npm install  # Frontend
pip install -r requirements.txt  # Backend

# Run development servers
npm run dev  # Frontend on http://localhost:3000
python backend/main.py  # Backend on http://localhost:8000
```

## Project Structure

```
axion/
├── frontend/           # Next.js application
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   └── public/         # Static assets
├── backend/            # FastAPI application
│   ├── services/       # Core services
│   ├── models/         # Data models
│   └── lean/           # Lean integration
└── docker/             # Docker configuration for Lean
```
