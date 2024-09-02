import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.tsx";
import Menu from "../components/menu/Menu.tsx";

import "./publicRoute.css";

const PublicRoute = () => {
    return (
        <>
            <Header />
            <Menu />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default PublicRoute;