import all_project from "../assets/icons/13px/Icon - All Projects_130px.svg";
import diy_workshops from "../assets/icons/13px/Icon_DiY_130px.svg";
import nature_and_greening from "../assets/icons/13px/Icon_Nature_Greening_130px.svg";
import free_trade from "../assets/icons/13px/Icon_FreeTrade_130px.svg";
import events from "../assets/icons/13px/Icon_Event_Blue_130px.svg";
import association from "../assets/icons/13px/Icon_Association_130px.svg";
import {ALL_PROJECTS, ASSOCIATION, DIY_WORKSHOPS, EVENTS, FREE_TRADE, NATURE_AND_GREENING } from "./Constants";
import { ReactElement } from "react";

export const getEventIcon =(event: string) : string | null => {
    switch (event) {
        case DIY_WORKSHOPS:
            return diy_workshops;
        case NATURE_AND_GREENING:
            return nature_and_greening;
        case FREE_TRADE:
            return free_trade;
        case ALL_PROJECTS:
            return all_project;
        case EVENTS:
            return events;
        case ASSOCIATION:
            return association;
        default:
            return null;
    }
}

export const getDescriptoion = (event: string): ReactElement => {
    switch (event) {
        case DIY_WORKSHOPS:
            return (
                <>
                    <p>Participer à un Atelier Faire Soi-Même, c’est se reconnecter à notre capacité à agir, à percevoir nos compétences et en ressentir de la fierté, c’est s’enrichir mutuellement grâce à la force du collectif, vivre des moments conviviaux et ressourçants.</p>
                    <p>C’est aussi contribuer à préserver nos ressources planétaires, économiser de l’énergie nécessaire à la fabrication des produits et au traitement des déchets, réduire notre empreinte carbone et ainsi lutter à notre échelle contre le réchauffement climatique.</p>
                    <p>La diversité des propositions permet chaque année de construire un programme ouvert et attractif pour chacune et chacun selon ses centres d’intérêt. </p>
                    <p>De la fabrication de ses produits ménagers en passant par l’upcycling (créer du neuf avec du vieux) qui donne une nouvelle vie aux tissus, à la découverte des plantes lors de sorties nature, et bien d’autres activités… seul ou en famille, toutes et tous sont les bienvenus. </p>
                </>
            );
        case NATURE_AND_GREENING:
            return (
                <>
                    <p>
                        Organiser des bains de forêt et des balades pour découvrir la botanique. Se donner rendez-vous
                        pour prendre soin de la nature :
                    </p>
                    <ul>
                        <li>Redonner un peu de place à la nature dans nos milieux urbains.</li>
                        <li>Contribuer localement à la réduction des émissions de carbone responsables du
                            réchauffement climatique.
                        </li>
                        <li>Créer de nouveaux espaces de biodiversité et de fraîcheur.</li>
                        <li>Embellir l’environnement pour le bien-être des citoyens.</li>
                    </ul>
                    <p>
                        Tels sont quelques uns des bienfaits de la végétalisation que nous soutenons au sein de notre
                        association à travers des actions menées en partenariat avec les communes et les habitants :
                        plantation citoyennes, échange de graines, sorties botaniques, partage de connaissances et
                        pratiques autour du végétal (compostage, permaculture…).
                    </p>

                </>
            );
        case FREE_TRADE:
            return (
                <>
                    <p> Vous avez des objets dont vous ne vous servez plus et qui fonctionnent ? </p>
                    <p> Vous cherchez un objet particulier sans avoir l’envie de l’acheter ? </p>
                    <p>
                        Une zone de gratuité c’est un espace où chacun peut déposer ce dont il n’a plus besoin (à condition
                        que l’objet soit propre et réutilisable), et où chacun peut prendre ce qu’il veut, même s’il n’a rien déposé.
                    </p>
                    <p> L’usage devient alors plus important que la notion de propriété. </p>
                </>
            );
        case ALL_PROJECTS:
            return (
                <>
                    <span>Adieu-siatz ! Bonjour à vous !</span>
                    <p>Bienvenu.e.s dans le mouvement des villes en transition ! </p>
                    <p>Nous proposons des activités pour faciliter la végétalisation en ville, l'économie circulaire, la
                        réduction des déchets, les ateliers faire soi-même et la sobriété numérique.</p>
                    <p>Les évènements et les ateliers que nous organisons sont ouverts à tout le monde: adhérents, non
                        adhérents, participants occasionnels, de passage, habitués, curieux, néophytes, ... </p>
                    <p>Mais attention, certaines activités sont limitées en nombre de place! Alors contactez-nous pour
                        vous inscrire ou simplement pour nous rencontrer. </p>
                </>
            );
        case EVENTS:
            return (
                <>
                    <p>
                        Nous organisons en collaboration avec d'autres associations et partenaires (Mairie, collectifs, ...)
                        des évènements occasionnels et parfois de participer à des animations régionales et nationales
                        (Fresques, Salons, ...).
                    </p>
                    <p>
                        Ces rencontres sont pour nous essentielles, car elles nous permettent
                        d'apprendre de nouveaux savoir-faire, de faire résonner nos motivations dans de nouveaux défis,
                        nous apportent d'autres perspectives.
                    </p>
                    <p> Pour chacun de ces évènements, pensez à nous envoyer un email pour vous inscrire, parfois les places sont limitées !</p>
                </>
            );
        case ASSOCIATION:
            return (
                <>
                    <p>
                        Cette section est le côté administratif de notre association... des réunions, certes ..., mais qui
                        sont aussi des moments pour se retrouver joyeusement et pouvoir participer à chacune des décisions ! :)
                    </p>
                    <p>
                        D'ailleurs, pour en savoir plus sur notre association et notre conseil collégial, nous vous avons
                        créé une belle page, que pour vous. Et les autres aussi, car on est un groupe toujours en appétit
                        de rencontrer de nouvelles personnes.
                    </p>
                </>
            );
        default:
            return (
                <>

                </>
            );
    }
}