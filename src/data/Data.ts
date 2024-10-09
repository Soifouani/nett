import {Menu} from "../models/Menu.ts";
import {EventCalendar} from "../models/EventCalendar.ts";
import {ALL_PROJECTS, ASSOCIATION, DIY_WORKSHOPS, EVENTS, FREE_TRADE, NATURE_AND_GREENING} from "../utils/Constants.ts";
import all_project from "../assets/icons/13px/Icon - All Projects_130px.svg";
import diy_workshops from "../assets/icons/13px/Icon_DiY_130px.svg";
import nature_and_greening from "../assets/icons/13px/Icon_Nature_Greening_130px.svg";
import free_trade from "../assets/icons/13px/Icon_FreeTrade_130px.svg";
import events from "../assets/icons/13px/Icon_Event_Blue_130px.svg";
import association from "../assets/icons/13px/Icon_Association_130px.svg";
import {environments} from "../utils/Environments.ts";


export const menus: Menu[] = [
    {
        title: ALL_PROJECTS,
        icon: all_project,
        descriptionTitle: "Adieu-siatz ! Bonjour à vous !",
        descriptionText: `Bienvenue sur notre site! Les évènements et les ateliers que nous proposons sont ouverts à tout le
                monde:
                adhérents, non adhérents, participants occasionels, de passage, habitués, curieux, néophytes, ... Mais
                attention,
                certaines activités sont limitées en nombre de place! Alors contactez-nous pour vous inscrire ou
                simplement pour
                nous rencontrer`,
        link: '#'
    },
    {
        title: DIY_WORKSHOPS,
        icon: diy_workshops,
        descriptionTitle: "Quam ob rem circumspecta cautela !",
        descriptionText: `Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda 
            Clematii cuiusdam Alexandrini nobilis mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, 
            non impetraret, ut ferebatur, per palatii pseudothyrum introducta, oblato pretioso reginae monili id adsecuta est, 
            ut ad Honoratum tum comitem orientis formula missa letali omnino scelere nullo contactus idem Clematius nec 
            hiscere nec loqui permissus occideretur.`,
        link: '#'
    },
    {
        title: NATURE_AND_GREENING,
        icon: nature_and_greening,
        descriptionTitle: "Observatum est deinceps et cum edita !",
        descriptionText: `Tempore quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, 
            ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, 
            quarum si altera defuisset, ad perfectam non venerat summitatem.`,
        link: '#'
    },
    {
        title: FREE_TRADE,
        icon: free_trade,
        descriptionTitle: "Montium petere coeperint grassatores !",
        descriptionText: `Dum haec in oriente aguntur, Arelate hiemem agens Constantius post theatralis ludos atque circenses 
            ambitioso editos apparatu diem sextum idus Octobres, qui imperii eius annum tricensimum terminabat, 
            insolentiae pondera gravius librans, siquid dubium deferebatur aut falsum, pro liquido accipiens et conperto, 
            inter alia excarnificatum Gerontium Magnentianae comitem partis exulari maerore multavit.`,
        link: '#'
    },
    {
        title: EVENTS,
        icon: events,
        descriptionTitle: "loci iniquitati milites cedunt !",
        descriptionText: `Ipsam vero urbem Byzantiorum fuisse refertissimam atque ornatissimam signis quis ignorat? Quae illi, 
            exhausti sumptibus bellisque maximis, cum omnis Mithridaticos impetus totumque Pontum armatum affervescentem 
            in Asiam atque erumpentem, ore repulsum et cervicibus interclusum suis sustinerent, tum, inquam, 
            Byzantii et postea signa illa et reliqua urbis ornanemta sanctissime custodita tenuerunt.`,
        link: environments.app.routes.home
    },
    {
        title: ASSOCIATION,
        icon: association,
        descriptionTitle: "ubi autem in planitie potuerint !",
        descriptionText: `Vbi curarum abiectis ponderibus aliis tamquam nodum et codicem difficillimum Caesarem 
            convellere nisu valido cogitabat, eique deliberanti cum proximis clandestinis conloquiis et nocturnis qua vi, 
            quibusve commentis id fieret, antequam effundendis rebus pertinacius incumberet confidentia, 
            acciri mollioribus scriptis per simulationem tractatus publici nimis urgentis eundem placuerat Gallum, 
            ut auxilio destitutus sine ullo interiret obstaculo.`,
        link: '#'
    },
];

export const eventCalendar: EventCalendar[] = [
    {
        month: "Juillet 2024",
        events: [
            {
                dayNumber: '17',
                day: 'Mercredi',
                time: 'A partir de 18h',
                category: NATURE_AND_GREENING,
                title: 'Désherbage',
                subTitle: "Suivi d’un picnic “Auberge Espagnole",
                venue: 'Lieu: Salle René CASSIN, 31240 Saint-Jean',
                canceled: false,
                newDate: false,
                newVenue: false,
                description: "",
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
        month: "Septembre 2024",
        events: [
            {
                dayNumber: '03',
                day: 'Mardi',
                time: '19h30',
                category: ASSOCIATION,
                title: 'Réunion  Conseil Collégial',
                subTitle: "Validation maquette nouveau site Web",
                venue: 'Saint-Jean',
                canceled: true,
                newDate: false,
                newVenue: false,
                description: "",
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
                dayNumber: "07",
                day: 'Samedi',
                time: 'De 08h30 à 12h30',
                category: EVENTS,
                title: 'Forum des Associations - Saint-Jean',
                subTitle: "Notre stand présentera les activités que nous organisons",
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
            {
                dayNumber: "07",
                day: 'Samedi',
                time: 'De 08h30 à 12h30',
                category: EVENTS,
                title: 'Forum des Associations - L’Union',
                subTitle: "Notre stand présentera les activités que nous organisons",
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
            {
                dayNumber: "14",
                day: 'Samedi',
                time: 'De 08h30 à 12h30',
                category: FREE_TRADE,
                title: 'Zone de Gratuité - Saint-Jean',
                subTitle: "Echangez et/ou trouvez des petits objets (décoration, petite vaisselle, vêtements, etc.)",
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
    {
        month: "Octobre 2024",
        events: [
            {
                dayNumber: '05',
                day: 'Samedi',
                time: '19h30',
                category: DIY_WORKSHOPS,
                title: 'Atelier Couture - Saint-Jean',
                subTitle: "Fabrication “Zéro Déchet”",
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
                dayNumber: '06',
                day: 'Dimanche',
                time: 'De 08h30 à 12h30',
                category: EVENTS,
                title: 'Salon Nature & Saveurs - Castelmaurou',
                subTitle: "Salon Nature & Saveurs organisé par la Mairie de Castelmaurou",
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
            {
                dayNumber: '06',
                day: 'Dimanche',
                time: 'De 08h30 à 12h30',
                category: DIY_WORKSHOPS,
                title: 'Ateliers “Faire Soi-Même” - Castelmaurou',
                subTitle: "Salon Nature & Saveurs organisé par la Mairie de Castelmaurou",
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
            {
                dayNumber: '06',
                day: 'Dimanche',
                time: 'De 08h30 à 12h30',
                category: FREE_TRADE,
                title: 'Zone de Gratuité - Castelmaurou',
                subTitle: "Salon Nature & Saveurs organisé par la Mairie de Castelmaurou",
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
    {
        month: "Novembre 2024",
        events: [
            {
                dayNumber: '07',
                day: 'Jeudi',
                time: '19h30',
                category: ASSOCIATION,
                title: 'Réunion Adhérents - Saint-Jean',
                subTitle: "Présentation du nouveau site internet",
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
                dayNumber: '16',
                day: 'Samedi',
                time: 'De 08h30 à 12h30',
                category: DIY_WORKSHOPS,
                title: 'Atelier “Bien-Être & Santé” -  L’Union',
                subTitle: "Fabrication de tisanes",
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
            {
                dayNumber: '24',
                day: 'Dimanche',
                time: 'De 08h30 à 12h30',
                category: EVENTS,
                title: 'Atelier “Animation Jeux sur la Transition - Balma',
                subTitle: "En collaboration avec le Hub Sud-Ouest, la Maison de l’environnement de Balma & Balma en Transition",
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
    {
        month: "Décembre 2024",
        events: [
            {
                dayNumber: '07',
                day: 'Samedi',
                time: '19h30',
                category: FREE_TRADE,
                title: 'Zone de Gratuité - Saint-Jean',
                subTitle: "Place du Marché",
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
        ]
    },
    {
        month: "Janvier 2025",
        events: [
            {
                dayNumber: '11',
                day: 'Samedi',
                time: '19h30',
                category: DIY_WORKSHOPS,
                title: 'Atelier “Couture” -  Saint-Jean',
                subTitle: "Fabrication de tisanes",
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
        ]
    },
    {
        month: "Février 2025",
        events: [
            {
                dayNumber: '08',
                day: 'Samedi',
                time: '19h30',
                category: DIY_WORKSHOPS,
                title: 'Atelier “Ménage dans la Cuisine” -  Saint-Jean',
                subTitle: "Beewrap, tawashi, fabrication produits d’entretien, ...",
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
        ]
    },
    {
        month: "Mars 2025",
        events: [
            {
                dayNumber: '--',
                day: 'Samedi',
                time: '19h30',
                category: NATURE_AND_GREENING,
                title: 'Co-consctruction avec Les Granges',
                subTitle: "Atelier Plantes du Jardin",
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
        ]
    },
    {
        month: "Avril 2025",
        events: [
            {
                dayNumber: '05',
                day: 'Samedi',
                time: '19h30',
                category: NATURE_AND_GREENING,
                title: 'Co-consctruction avec Les Granges',
                subTitle: "Atelier Plantes du Jardin",
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
        ]
    },
    {
        month: "Mai 2025",
        events: [
            {
                dayNumber: '24',
                day: 'Samedi',
                time: '19h30',
                category: NATURE_AND_GREENING,
                title: 'Sortie Nature ',
                subTitle: "Identification Botanique",
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
        ]
    },
    {
        month: "Juin 2025",
        events: [
            {
                dayNumber: '07 ou 14',
                day: 'Samedi',
                time: '19h30',
                category: NATURE_AND_GREENING,
                title: 'Sortie Nature ',
                subTitle: "Co-organisé avec Biodiversité Balma ",
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
        ]
    },
];