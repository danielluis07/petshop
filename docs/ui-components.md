## Shadcn UI

Shadcn is the foundation for the design in this project. Tailwind for styling

## File placement

See code conventions for file placement, module boundaries, and hook dependencies.

## Server vs Client Components

Prefer Server Components by default.
Only mark a component "use client" when it truly needs client-side features (hooks, event handlers, browser APIs).
Isolate that client logic into the smallest possible leaf component and keep the parent as a Server Component.

Layouts and their server-rendered shells must never fetch data or sessions. Reading cookies for UI preferences is allowed. Load sidebar user and Tenant information in client leaf components. Run route authorization guards in page.tsx; Server Actions and API endpoints must still authorize their own operations.
