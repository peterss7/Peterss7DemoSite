import { Outlet } from "react-router-dom";
import { TerminalNavbar, Footer } from "./layout";
import "./shared/styles/global.css";

export default function App() {

    return (
        <div className="app-shell">
            <TerminalNavbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}