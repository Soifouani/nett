import { ReactElement, useState } from "react";
import MenuItem from "./MenuItem";
import "./menu.css";
import {menuItems} from "../../data/Data.ts";

const Menu = (): ReactElement => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleClick = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
        <nav>
            <div className={"nav-title"}>Nos Projets</div>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        title={menuItem.title}
                        subItems={menuItem.subItems}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
