import {FC, ReactElement} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./publicRoute.css";

const PublicRoute: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PublicRoute;