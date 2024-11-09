import {FC, ReactElement} from "react";
import {Event} from "../../models/Event";
import {getEventIcon} from "../../utils/CommonFonctions.ts";

import arrowLeft from "../../assets/icons/arrow-left.png"

import "./event.css";
import { ALL_PROJECTS } from "../../utils/Constants.ts";

const EventItem: FC<{ event: Event; selectedMenuTitle: string }> = ({event, selectedMenuTitle}): ReactElement => {

    return (
        <aside>
            {
                selectedMenuTitle === ALL_PROJECTS && (
                    <div className={"event-category"}>
                        <img src={getEventIcon(event.category) ?? ""} alt={event.category}/>
                    </div>
                )
            }
            <div className="event-date">
                <span>{event.day}</span>
                <span>{event.dayNumber}</span>
            </div>
            <div className="event-title">
                <span className={"title"}>{event.title}</span>
                <span className={"sub-title"}>{event.subTitle}</span>
            </div>
            {
                event.canceled && (
                    <div className={"event-canceled"}>
                        <span>ANNULÉ</span>
                    </div>
                )
            }
            <div className="event-button">
                <button><img src={arrowLeft} alt={""}/></button>
            </div>
        </aside>
    );
};

export default EventItem;