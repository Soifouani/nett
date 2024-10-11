import {FC, ReactElement} from "react";
import {Event} from "../../models/Event";

import arrowLeft from "../../assets/icons/arrow-left.png"

import "./event.css";

const EventItem: FC<{ event: Event }> = ({event}): ReactElement => {
    return (
        <aside>
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
                <button><img src={arrowLeft} alt={""} /> </button>
            </div>
        </aside>
    );
};

export default EventItem;