import {FC, ReactElement, useCallback, useState, useRef} from "react";
import "./menu.css";
import {menus} from "../../data/Data.ts";
import {Link} from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow-left.png";
import { MENU_SCROLL_DISTANCE } from "../../utils/Constants.ts";

interface MenuProps {
    onMenuSelect: (selectedMenuTitle: string) => void;
}


const Menu: FC<MenuProps> = ({ onMenuSelect }): ReactElement => {

    const menuRef = useRef<HTMLElement>(null);

    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleClick = useCallback(
        (index: number, selectedMenuTitle: string) => {
            setOpenIndex(index);
            onMenuSelect(selectedMenuTitle);
            window.scrollTo(0, 0);
        },
        [onMenuSelect]
    )

    const scrollRight = () => {
        menuRef?.current?.scrollBy({ left: MENU_SCROLL_DISTANCE, behavior: 'smooth' });
    }

    const  scrollLeft = () => {
        menuRef?.current?.scrollBy({ left: -MENU_SCROLL_DISTANCE, behavior: 'smooth' });
    }

    return (
        <div className={"menu-container"}>
            <div className={"menu-prev"} onClick={scrollLeft}>
                <img src={arrowIcon} />
            </div>
            <nav
                ref={menuRef}
                className={"menu"}
                role="navigation"
                aria-label="Main"
            >
                <ul>
                    {menus.map((menu, index) => {
                        return (
                            <li key={`nett_menu${index}`}>
                                <Link
                                    to={menu.link}
                                    onClick={() => handleClick(index, menu.title)}
                                    className={`menu-item ${openIndex === index ? 'selected' : 'no-selected'}`}
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
            <div className={"menu-next"} onClick={scrollRight}>
                <img src={arrowIcon}/>
            </div>
        </div>
    );
};

export default Menu;
