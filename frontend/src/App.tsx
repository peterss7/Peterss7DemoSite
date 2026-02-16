import { Outlet } from "react-router-dom";
import { TerminalNavbar, Footer } from "./layout";


export default function App() {

    return (
        <div className="app-wrapper">
            <TerminalNavbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}