import {FC, ReactElement, useCallback, useState} from "react";
import Description from "../../components/description/Description.tsx";
import EventList from "../../components/event/EventList.tsx";

import "./home.css";
import Menu from "../../components/menu/Menu.tsx";
import {ALL_PROJECTS} from "../../utils/Constants.ts";


const Home: FC = (): ReactElement => {

    const [selectedMenuTitle, setSelectedMenuTitle] = useState<string>(ALL_PROJECTS);

    const handleMenuSelect = useCallback(
        (menuTitle: string) => {
            setSelectedMenuTitle(menuTitle);
        }, []
    );

    return (
        <div className="home-container">
            <div className="home-menu">
                <Menu onMenuSelect={handleMenuSelect}/>
            </div>
            <div className="home-content">
                <Description selectedMenuTitle={selectedMenuTitle}/>
                <EventList selectedMenuTitle={selectedMenuTitle} />
            </div>
        </div>
    );
};

export default Home;