import {FC, ReactElement} from "react";

import cheerfulHappyIcon from "../../assets/icons/cheerful_happy_icon.svg"

import "./description.css";

const Description: FC = (): ReactElement => {
    return (
        <section className="description">
            <h1>Adieu-siatz ! Bonjour à vous !</h1>
            <p>
                Bienvenue sur notre site! Les évènements et les ateliers que nous proposons sont ouverts à tout le
                monde:
                adhérents, non adhérents, participants occasionels, de passage, habitués, curieux, néophytes, ... Mais
                attention,
                certaines activités sont limitées en nombre de place! Alors contactez-nous pour vous inscrire ou
                simplement pour
                nous rencontrer
            </p>
            <span className={"cheerful-happy-icon"}><img src={cheerfulHappyIcon}/></span>
        </section>
    );
};

export default Description;