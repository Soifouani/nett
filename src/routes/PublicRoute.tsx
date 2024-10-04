import {FC, ReactElement} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";

import "./publicRoute.css";

const PublicRoute: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default PublicRoute;