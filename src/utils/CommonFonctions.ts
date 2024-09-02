import {DIY_WORKSHOPS, FREE_TRADE, FRESKS, NATURE_WALKS, CLEAN_UP, GREENING, DIALOGUE} from "./Constants.ts";
import trashCollectionIcon from "../assets/icons/Icon-clean-up.svg";
import discussionIcon from "../assets/icons/icon-discussion.svg";
import diyWorkshopsIcon from "../assets/icons/icon-diy.svg";
import muralsIcon from "../assets/icons/icon-fresque.svg";
import freeZonesIcon from "../assets/icons/icon-trade.svg";
import vegetalizeIcon from "../assets/icons/icon-vegetalize.svg";

export const getEventIcon =(event: string) => {
    switch (event) {
        case DIY_WORKSHOPS:
            return diyWorkshopsIcon;
        case GREENING:
            return vegetalizeIcon;
        case FREE_TRADE:
            return freeZonesIcon;
        case NATURE_WALKS:
            return null;
        case FRESKS:
            return muralsIcon;
        case CLEAN_UP:
            return trashCollectionIcon;
        case DIALOGUE:
            return discussionIcon;
        default:
            return null;
    }
}