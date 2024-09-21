import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import Home from "../pages/home/Home.tsx";
import {environments} from "../utils/Environments.ts";
import PublicRoute from "./PublicRoute.tsx";

const AppRoute = (): ReactElement => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path={environments.app.routes.home} element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AppRoute;