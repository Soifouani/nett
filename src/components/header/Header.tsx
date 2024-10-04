import {Link} from "react-router-dom";
import {FC, ReactElement} from "react";

import logo from "../../assets/images/logo/logo-Nord-Est-Toulousain-en-transition.webp";
import logoHelloAsso from "../../assets/images/logo/logo-helloAsso.png";
import facebook from "../../assets/icons/facebook.png";

import "./header.css";
import {environments} from "../../utils/Environments.ts";

const Header: FC = (): ReactElement => {
    return (
        <header>
            <div className="logo">
                <Link to={environments.app.routes.home}>
                    <img src={logo} alt="log"/>
                </Link>
            </div>
            <div className={"join-us"}>
                <Link className={"join-us_link"} to={"#"}>
                    <span className={"join-us_text"}>Adhésion avec </span>
                    <span className={"join-us_img-wrapper"}>
                        <img className={"join-us_img"} src={logoHelloAsso} alt=""/>
                    </span>
                </Link>
            </div>
            <div className="wrapper-info">
                <Link to="#"><img src={facebook} alt="facebook"/> </Link>
                <Link to="#">Qui nous sommes ?</Link>
            </div>
        </header>
    );
};

export default Header;