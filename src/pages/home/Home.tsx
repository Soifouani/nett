import {FC, ReactElement, useState } from "react";
import Description from "../../components/description/Description.tsx";
import EventList from "../../components/event/EventList.tsx";

import "./home.css";
import Menu from "../../components/menu/Menu.tsx";
import { ALL_PROJECTS } from "../../utils/Constants.ts";

const Home: FC = (): ReactElement => {

    const [selectedMenu, setSelectedMenu] = useState<string>(ALL_PROJECTS);

    return (
        <>
            <div className={"home-container"}>
                <div className={"home-menu"}>
                    <Menu onMenuSelect={setSelectedMenu} />
                </div>
                <div className={"home-content"}>
                    <Description />
                    <EventList selectedMenu={selectedMenu} />
                </div>
            </div>
        </>
    );
};

export default Home;