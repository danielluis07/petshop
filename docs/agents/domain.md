# Domain docs

This repository uses a single-context domain layout:

- `GLOSSARY.md` at the repository root defines domain terms.
- `docs/adr/` contains architectural decision records.

## Before exploring

Read the glossary and ADRs relevant to the area being explored.
If these files are absent, proceed silently. Create them lazily
through domain modeling when terms or decisions are resolved.

## Vocabulary

Use glossary terms consistently in issues, proposals, code, and tests.
If a needed concept is missing, reconsider the terminology or note
the gap for domain modeling.

## Decision conflicts

Explicitly identify any proposal that contradicts an existing ADR,
including the ADR reference and the reason to revisit it.
