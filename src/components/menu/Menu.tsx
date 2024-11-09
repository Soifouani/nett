import {FC, ReactElement, useCallback, useState} from "react";
import "./menu.css";
import {menus} from "../../data/Data.ts";
import {Link} from "react-router-dom";

interface MenuProps {
    onMenuSelect: (selectedMenuTitle: string) => void;
}

const Menu: FC<MenuProps> = ({ onMenuSelect }): ReactElement => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleClick = useCallback(
        (index: number, selectedMenuTitle: string) => {
            setOpenIndex(index);
            onMenuSelect(selectedMenuTitle);
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
                                onClick={() => handleClick(index, menu.title)}
                                className={`menu-item ${ openIndex === index ? 'selected' : 'no-selected'}`}
                            >
                                <span>
                                    <img src={menu.icon} alt={menu.title}/>
                                </span>
                                <span className={"menu-title"}>{menu.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
