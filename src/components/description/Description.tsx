import {ReactElement} from "react";

import "./description.css";

const Description = (): ReactElement => {
    return (
        <section className="description">
            <h1>Adieu-siatz ! Bonjour à vous !</h1>
            <p>
                Bienvenue sur notre site! Les évènements et les ateliers que nous proposons sont ouverts à tout le monde:
                adhérents, non adhérents, participants occasionels, de passage, habitués, curieux, néophytes, ... Mais attention,
                certaines activités sont limitées en nombre de place! Alors contactez-nous pour vous inscrire ou simplement pour
                nous rencontrer
            </p>
        </section>
    );
};

export default Description;