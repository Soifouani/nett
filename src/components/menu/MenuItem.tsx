import {ReactElement, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./menu.css";

import rightArrow from "../../assets/icons/right-arrow.svg";
import rightArrowHover from "../../assets/icons/right-arrow-hover.svg";

interface MenuItemProps {
    title: string;
    subItems: { title: string, link: string }[];
    isOpen: boolean;
    onClick: () => void;
}

const MenuItem = ({ title, subItems, isOpen, onClick}: MenuItemProps): ReactElement => {

    const [subMenuIndex, setSubMenuIndex] = useState<number | null>(null)
    const handleSubMenuClick = (index: number) => setSubMenuIndex(subMenuIndex === index ? null : index);

    useEffect(() => {
        if (!isOpen) {
            setSubMenuIndex(null);
        }
    }, [isOpen]);

    return (
        <li>
            <div onClick={onClick} className={`menu-item ${isOpen? 'selected' : ''}`}>
                <span><img src={isOpen ? rightArrowHover : rightArrow } alt={""}/></span>
                <span>{title}</span>
            </div>
            {isOpen && (
                <ul className="sub-menu">
                    {subItems.map((subItem, index) => (
                        <li key={index} className={`${subMenuIndex === index ? 'selected' : ''}`} onClick={() => handleSubMenuClick(index)}>
                            <NavLink
                                to={subItem.link}
                                className={'sub-item'}
                            >
                                <span><img src={subMenuIndex === index ? rightArrowHover : rightArrow} alt={""}/></span>
                                <span>{subItem.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
