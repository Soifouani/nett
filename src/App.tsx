import {ReactElement} from "react";
import AppRoute from "./routes/AppRoute.tsx";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton.tsx";

const App = (): ReactElement =>
    <>
        <AppRoute />
        <ScrollTopButton />
    </>

const App: FC = (): ReactElement => <AppRoute />;

export default App
