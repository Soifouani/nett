import {FC, ReactElement, useCallback, useState} from "react";
import Description from "../../components/description/Description.tsx";
import EventList from "../../components/event/EventList.tsx";

import "./home.css";
import Menu from "../../components/menu/Menu.tsx";
import {ALL_PROJECTS} from "../../utils/Constants.ts";
import {menus} from "../../data/Data";
import {MenuState} from "../../models/MenuState";


const Home: FC = (): ReactElement => {

    const [selectedMenu, setSelectedMenu] = useState<MenuState>({
        selectedMenu: ALL_PROJECTS,
        descriptionTitle: menus[0].descriptionTitle,
        descriptionText: menus[0].descriptionText
    });

    const handleMenuSelect = useCallback(
        (menu: MenuState) => {
            setSelectedMenu(menu);
        },
        []
    );

    return (
        <div className="home-container">
            <div className="home-menu">
                <Menu onMenuSelect={handleMenuSelect}/>
            </div>
            <div className="home-content">
                <Description
                    descriptionTitle={selectedMenu.descriptionTitle}
                    descriptionText={selectedMenu.descriptionText}
                />
                <EventList selectedMenu={selectedMenu.selectedMenu} />
            </div>
        </div>
    );
};

export default Home;