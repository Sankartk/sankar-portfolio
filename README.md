# Sankar Kalyanakumar — Portfolio

Personal engineering portfolio built with **Next.js 15 (App Router)** and **Tailwind CSS**. Showcases real-world projects with deep case studies, technical architecture breakdowns, and live demos.

## Live Site

[sankartk.dev](https://sankartk.dev)

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Deployment | Vercel |

## Projects Featured

| Project | Description | Repo |
|---------|-------------|------|
| **Ops Copilot** | LLM-powered ops assistant with RAG pipeline and Slack integration | [github.com/Sankartk/ops-copilot-bedrock](https://github.com/Sankartk/ops-copilot-bedrock) |
| **Ledger Reconciler** | Automated multi-pass bank reconciliation engine (Python, SQLite, Streamlit) | [github.com/Sankartk/ledger-reconciler](https://github.com/Sankartk/ledger-reconciler) |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx                        # Homepage
  projects/
    ops-copilot/page.tsx          # Ops Copilot case study
    ledger-reconciler/page.tsx    # Ledger Reconciler case study
components/
  Navbar.tsx
  ProjectCard.tsx
public/                           # Static assets
```

## Deployment

Deployed automatically on push to `main` via Vercel. No manual steps required.
