import {EventCalendar} from "../models/EventCalendar.ts";
import {CLEAN_UP, DIY_WORKSHOPS, FREE_TRADE, FRESKS, GREENING, NATURE_WALKS} from "../utils/Constants.ts";

export const menuItems = [
    {
        title: DIY_WORKSHOPS,
        subItems: [
            {title: 'Couture', link: '#'},
            {title: 'Bien-Être & Santé', link: '#'},
            {title: 'Maison', link: '#'},
            {title: 'Jardinage', link: '#'},
            {title: 'Sobriété Technologique', link: '#'}
        ]
    },
    {
        title: GREENING,
        subItems: [
            {title: 'Micro-Forêt', link: '#'},
            {title: 'Coeur de Ville', link: '#'},
            {title: 'Compostage', link: '#'},
            {title: 'Jardin Collectif', link: '#'}
        ]
    },
    {
        title: FREE_TRADE,
        subItems: [
            {title: 'Saint-Jean', link: '#'},
            {title: 'L\'union', link: '#'},
            {title: 'Castelmaurou', link: '#'}
        ]
    },
    {
        title: NATURE_WALKS,
        subItems: [
            {title: 'Découverte Botanique', link: '#'},
            {title: 'Découverte Biodiversité', link: '#'},
            {title: 'Bain de Forêt', link: '#'}
        ]
    },
    {
        title: FRESKS,
        subItems: [
            {title: 'Fresque du Climat', link: '#'},
            {title: 'Fresque du Numérique', link: '#'},
            {title: 'Fresque des Mots', link: '#'}
        ]
    },
    {
        title: CLEAN_UP,
        subItems: [
            {title: 'World Clean Up Day (Saint-Jean)', link: '#'},
            {title: 'World Clean Up Day (L\'Union)', link: '#'}
        ]
    },
];

export const eventCalendar: EventCalendar[] = [
    {
        month: "Juillet",
        events: [
            {
                date: 'Mercredi',
                time: 'A partir de 18h',
                category: 'Atelier Faire Soi-Même',
                icon: "",
                title: 'Couture',
                subTitle: "Zéro Déchet",
                venue: 'Lieu: Salle René CASSIN, 31240 Saint-Jean',
                canceled: false,
                newDate: false,
                newVenue: false,
                description: "Haec igitur prima lex amicitiae sanciatur, ut ab amicis honesta petamus, amicorum causa honesta faciamus, ne exspectemus quidem, dum rogemur; studium semper adsit, cunctatio absit; consilium vero dare audeamus libere. Plurimum in amicitia amicorum bene suadentium valeat auctoritas, eaque et adhibeatur ad monendum non modo aperte sed etiam acriter, si res postulabit, et adhibitae pareatur.\n" +
                    "\n" +
                    "Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.\n" +
                    "\n" +
                    "Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.",
                picture: "",
                pictureDescription: "",
                organization: "NETT",
                contactName: "Magali",
                email: "",
                booking: "Envoyez un email pour réserver une place",
                price: "Gratuit",
                placeNumber: "10",
                link: '#',
            },
        ]
    },
    {
        month: "Septembre",
        events: [
            {
                date: 'Mardi 03 Septembre 2024',
                time: '19h30',
                category: 'Conseil Collégial NETT',
                icon: "",
                title: 'Réunion',
                subTitle: "",
                venue: 'Saint-Jean',
                canceled: true,
                newDate: false,
                newVenue: false,
                description: "Validation de la maquette du site internet",
                picture: "",
                pictureDescription: "",
                organization: "NETT",
                contactName: "Fanny",
                email: "",
                booking: "Envoyez un email pour avertir de votre venue, afin de prévoir le nombre de personnes",
                price: "Gratuit",
                placeNumber: "",
                link: '#',
            },
            {
                date: 'Samedi 07 Septembre 2024',
                time: 'De 08h30 à 12h30',
                category: 'Rencontre NETT',
                icon: "",
                title: 'Forum des Associations de Saint-Jean',
                subTitle: "",
                venue: 'Salle René CASSIN, 31240 Saint-Jean',
                canceled: true,
                newDate: false,
                newVenue: false,
                description: "Le NETT présentera ses activités, ateliers et évènements.",
                picture: "",
                pictureDescription: "",
                organization: "NETT",
                contactName: "Christine",
                email: "",
                booking: "Pas de réservation nécessaire",
                price: "Gratuit",
                placeNumber: "--",
                link: '#',
            },
        ]
    },
];