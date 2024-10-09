import {FC, ReactElement, useCallback, useState} from "react";
import "./menu.css";
import {menus} from "../../data/Data.ts";
import {Link} from "react-router-dom";
import {MenuState} from "../../models/MenuState";

interface MenuProps {
    onMenuSelect: (selectedMenu: MenuState) => void;
}

const Menu: FC<MenuProps> = ({ onMenuSelect }): ReactElement => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleClick = useCallback(
        (index: number, selectedMenu: string, descriptionTitle: string,descriptionText: string) => {
            setOpenIndex(index);
            onMenuSelect({
                selectedMenu,
                descriptionTitle,
                descriptionText,
            });
            window.scrollTo(0, 0);
        },
        [onMenuSelect]
    )

    return (
        <nav className={"menu"}>
            <ul>
                {menus.map((menu, index) => {
                    return (
                        <li key={`nett_menu${index}`}>
                            <Link
                                to={menu.link}
                                onClick={() => handleClick(index, menu.title, menu.descriptionTitle, menu.descriptionText)}
                                className={`menu-item ${ openIndex === index ? 'selected' : 'no-selected'}`}
                            >
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
