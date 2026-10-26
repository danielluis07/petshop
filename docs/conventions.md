## Import alias

Prefer the @ alias for imports

## Component Structure

Prefer thin, declarative components and pages.
Extract UI into dedicated components and logic into the folders described under Layout below.
Keep files focused on composition and wiring — never leave markup or functions inline.

components/ contains only .tsx UI files. Put domain-specific hooks and their browser helpers in modules/<area>/hooks/, never beside components. Import them through the module's separate, browser-safe hooks entry point (@/modules/<area>/hooks).

See UI component guidelines for UI behavior, including confirmation requirements and examples.
