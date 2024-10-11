import {FC, ReactElement, useEffect, useState} from "react";
import {menus} from "../../data/Data";
import {Menu} from "../../models/Menu";

import "./description.css";

interface DescriptionProps {
    selectedMenuTitle: string
}

const Description: FC<DescriptionProps> = ({ selectedMenuTitle }): ReactElement => {

    const [menu, setMenu] = useState<Menu>(menus[0]);

    useEffect(() => {
        const foundMenu = menus.find(menu => menu.title === selectedMenuTitle) || menus[0];
        setMenu(foundMenu);
    }, [selectedMenuTitle]);

    return (
        <section className="description">
            <div className="title-wrapper">
                <img src={menu.icon} alt={menu.title} />
                <h1>{menu.title}</h1>
            </div>
            <p>{ menu.description }</p>
        </section>
    );
};

export default Description;