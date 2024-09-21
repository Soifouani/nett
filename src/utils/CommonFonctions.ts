import all_project from "../assets/icons/13px/Icon - All Projects_130px.svg";
import diy_workshops from "../assets/icons/13px/Icon_DiY_130px.svg";
import nature_and_greening from "../assets/icons/13px/Icon_Nature_Greening_130px.svg";
import free_trade from "../assets/icons/13px/Icon_FreeTrade_130px.svg";
import events from "../assets/icons/13px/Icon_Event_Blue_130px.svg";
import association from "../assets/icons/13px/Icon_Association_130px.svg";
import {ALL_PROJECTS, ASSOCIATION, DIY_WORKSHOPS, EVENTS, FREE_TRADE, NATURE_AND_GREENING } from "./Constants";

export const getEventIcon =(event: string) => {
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