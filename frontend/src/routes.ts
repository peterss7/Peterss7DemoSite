export type SectionId = "home" | "about";

export const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
] as const;

export const SECTION_IDS = ["home", "about"] as const;
