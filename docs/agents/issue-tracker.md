# Issue tracker: GitHub

Issues and specs live in GitHub Issues for `danielluis07/petshop`.
Use the `gh` CLI from this repository.

## Operations

- Create: `gh issue create --title "..." --body-file <file>`
- Read: `gh issue view <number> --json number,title,body,labels,comments`
- List: `gh issue list --state open --json number,title,body,labels`
- Comment: `gh issue comment <number> --body-file <file>`
- Apply labels: `gh issue edit <number> --add-label "..."`
- Remove labels: `gh issue edit <number> --remove-label "..."`
- Close: `gh issue close <number> --comment "..."`

Use temporary files for multiline issue bodies and comments.
Use `--repo danielluis07/petshop` when running outside this clone.

## Pull requests as a triage surface

PRs as a request surface: no.

## Skill conventions

When a skill says "publish to the issue tracker", create a GitHub issue.
When it says "fetch the relevant ticket", read the GitHub issue.

## Parent tickets and dependencies

Link child tickets using GitHub sub-issues when supported.
Otherwise, put `Part of #<parent>` at the top of each child
and add it to a task list in the parent.

Use native GitHub issue dependencies for blockers when available.
Otherwise, put `Blocked by: #<number>` at the top of the child.
A ticket is unblocked when all its blockers are closed.

## Wayfinding

A map is an issue labelled `wayfinder:map`, containing Notes,
Decisions-so-far, and Fog. Link its tickets as child issues.

Child labels use `wayfinder:<type>`, where type is research,
prototype, grilling, or task.

Choose the first open, unassigned child in map order with no open
blockers. Claim it by assigning yourself. Resolve it by commenting
with the result, closing it, and adding a result summary and link
to the map's Decisions-so-far.
