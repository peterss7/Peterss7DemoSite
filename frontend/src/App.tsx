import { HomeSection } from "./features/home";
import NavBar from "./layout/Navbar";
import type { SectionId } from "./routes";

export default function App() {

    const section = (id: SectionId) => ({ id, style: { scrollMarginTop: 90 } });

    return (
        <>
            <NavBar />
            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px' }}>
                <section {...section("home")}>
                    <HomeSection />
                </section>
            </main>
        </>
    );
}