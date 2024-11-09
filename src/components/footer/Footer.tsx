import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Link to={"#"}>Nous contacter</Link>
            <Link to={"#"}>Nos partenaires</Link>
            <Link to={"#"}>Mentions légales</Link>
            <Link to={"#"}>Empreinte CO2</Link>
            <p>&copy; {currentYear} <span id="copyright-year"></span> NETT. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;