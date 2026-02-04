import "./shared/styles/global.css";
import "./layout/styles/mainStyles.css";
import "./layout/styles/footerStyles.css";
import { Outlet } from "react-router-dom";
import { TerminalNavbar, Footer } from "./layout";


export default function App() {

    return (
        <>
            <TerminalNavbar />
            <Outlet />
            <Footer />
        </>
    );
}