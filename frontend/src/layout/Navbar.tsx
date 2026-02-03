import { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS } from "../routes";
import { useNavbar } from "./hooks/useNavbar";
import "./styles/navbarStyles.css";
import "../shared/styles/global.css";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<string>("");

    const { getIdFromHref } = useNavbar();

    const ids = useMemo(() => NAV_ITEMS.map(item => getIdFromHref(item.href)), []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        // Highlight section currently in view
        const elements = ids
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // pick the most visible intersecting entry
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            {
                root: null,
                threshold: [0.2, 0.35, 0.5, 0.65],
                rootMargin: "-20% 0px -65% 0px",
            }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    const onNavClick = (href: string) => {
        console.log("Navigating to", href);
        setIsOpen(false);
        const id = getIdFromHref(href);
        console.log("Scrolling to id", id);
        const el = document.getElementById(id);        
        if (!el) return;
        console.log("Element found, scrolling into view");
        history.replaceState(null, "", href);
    };

    return (
        <header>
            <nav className="t-border-1">
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavClick("#home"); }} className="brand">
                    <span className="brand-dot" />
                    <span className="brand-text">Your Name</span>
                </a>

                {/* Desktop links */}
                <div className="links-desktop">
                    {NAV_ITEMS.map((item) => {
                        const id = getIdFromHref(item.href);
                        const isActive = id === activeId;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); onNavClick(item.href); }}
                                className={`link ${isActive ? "link-active" : ""}`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile button */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(v => !v)}
                    className="menu-button"
                >
                    <span className="menu-icon-line" />
                    <span className="menu-icon-line" />
                    <span className="menu-icon-line" />
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="mobile-panel" role="menu">
                    {NAV_ITEMS.map((item) => {
                        const id = getIdFromHref(item.href);
                        const isActive = id === activeId;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); onNavClick(item.href); }}
                                className={`mobile-link ${isActive ? "mobile-link-active" : ""}`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}