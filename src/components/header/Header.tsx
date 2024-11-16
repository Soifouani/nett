import {Link} from "react-router-dom";
import {FC, ReactElement, useState} from "react";

import logo from "../../assets/images/logo/logo-Nord-Est-Toulousain-en-transition.webp";
import logoHelloAssoDesktop from "../../assets/images/logo/logo-helloAsso.png";
import facebook from "../../assets/icons/facebook.png";
import {environments} from "../../utils/Environments.ts";
import ModalComponent from "../modal/ModalComponent.tsx";
import {FACEBOOK_MODAL_TEXT} from "../../utils/Constants.ts";
import {HELLO_ASSO_MODAL_TEXT} from "../../utils/Constants";
import Modal from "../../models/Modal.ts";

import "./header.css";

const Header: FC = (): ReactElement => {
    const [modalOpen, setModalOpen] = useState<Modal>({
        isOpen: false,
        onConfirm: () => {},
        text: '',
    });
    const handleHelloAsso = () => window.open(environments.app.url.helloAsso, '_blank');
    const handleFacebook = () => window.open(environments.app.url.facebook, '_blank');
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="logo">
                <Link to={environments.app.routes.home}>
                    <img src={logo} alt="log"/>
                </Link>
            </div>
            <button
                className={`header__hamburger-button ${isOpen ? "open" : ""}`}
                onClick={handleToggleMenu}
                aria-label="Toggle menu"
            >
                <span className="header__hamburger-bar"></span>
                <span className="header__hamburger-bar"></span>
                <span className="header__hamburger-bar"></span>
            </button>
            <div className={`${isOpen ? "header__menu-open" : "header__menu"}`}>
                <div className={"header__menu-content"}>
                    <Link className={"about-us"} to="#">Qui nous sommes ?</Link>
                    <div className="join-us">
                        <Link
                            onClick={() => setModalOpen({
                                    isOpen: true,
                                    onConfirm: handleHelloAsso,
                                    text: HELLO_ASSO_MODAL_TEXT
                                })
                            }
                            className="join-us__link"
                            to="#"
                        >
                            <span className="join-us__img-wrapper">
                                <img className="join-us__img-desktop" src={logoHelloAssoDesktop} alt=""/>
                            </span>
                            <span className="tooltip">Adhésion avec Hello Asso</span>
                        </Link>
                    </div>
                    <Link
                        onClick={() => setModalOpen({
                            isOpen: true,
                            onConfirm: handleFacebook,
                            text: FACEBOOK_MODAL_TEXT
                        })}
                        className={"facebook"}
                        to="#"
                    >
                        <img src={facebook} alt="facebook"/>
                    </Link>
                </div>
            </div>
            <ModalComponent
                modalOpen={modalOpen}
                onClose={() => setModalOpen({
                        isOpen: false,
                        onConfirm: () => {},
                        text: ''
                    })
                }
            />
        </header>
    );
};

export default Header;