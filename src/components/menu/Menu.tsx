import {FC, ReactElement, useState } from "react";
import "./menu.css";
import { menus } from "../../data/Data.ts";
import { Link } from "react-router-dom";

interface MenuProps {
    onMenuSelect: (selectedMenu: string) => void;
}

const Menu: FC<MenuProps> = ({ onMenuSelect }): ReactElement => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleClick = (index: number, selectedMenu: string) => {
        setOpenIndex(index);
        onMenuSelect(selectedMenu);
        window.scrollTo(0, 0);
    }

    return (
        <nav className={"menu"}>
            <ul>
                {menus.map((menu, index) => {
                    return (
                        <li key={index}>
                            <Link to={menu.link} onClick={() => handleClick(index, menu.title)} className={`menu-item ${ openIndex === index ? 'selected' : 'no-selected'}`}>
                                <span>
                                    <img src={menu.icon} alt={menu.title}/>
                                </span>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
