import { ReactElement, useState } from "react";
import "./menu.css";
import { menus } from "../../data/Data.ts";
import { Link } from "react-router-dom";

const Menu = (): ReactElement => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleClick = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
        <nav className={"menu"}>
            <div className={"menu-title"}>Nos Projets</div>
            <ul>
                {menus.map((menu, index) => {
                    return (
                        <li key={index}>
                            <Link to={menu.link} onClick={() => handleClick(index)} className={`menu-item ${ openIndex === index ? 'selected' : ''}`}>
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
