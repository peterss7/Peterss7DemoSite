export type SectionId = "home" | "about";

export const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = ["home", "about", "projects", "contact"] as const;