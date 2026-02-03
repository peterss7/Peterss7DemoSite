import { HomeSection } from "../features/home";
import Footer from "./Footer";
import NavBar from "./Navbar";
import "./styles/mainStyles.css";

export default function MainContainer() {
    return (
        <main className="flex-column">
            <NavBar />
            <HomeSection />
            <Footer />
        </main>
    );
}