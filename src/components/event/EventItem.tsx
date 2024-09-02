import {FC, ReactElement} from "react";
import {Event} from "../../models/Event";
import {Link} from "react-router-dom";
import {environments} from "../../utils/Environments.ts";
import {getEventIcon} from "../../utils/CommonFonctions.ts";

import canceledEvent from "../../assets/images/cancelled.svg";

import "./event.css";

const EventItem: FC<{ event: Event }> = ({event}): ReactElement => {
    return (
        <aside>
            <div><img src={getEventIcon(event.category) ?? ""} alt={""}/></div>
            <div className="date">{event.date}</div>
            <div className="event-info">
                <span className={"event-info-title"}>{event.title}</span>
                <span className={"event-info-sub-title"}>{event.subTitle}</span>
            </div>
            {
                event.canceled ? (
                    <div className={"canceled-img_wrapper"}>
                        <img className={"canceled-img"} src={canceledEvent} alt={""}/>
                    </div>
                ) : (
                    <div className="see-more">
                        <Link to={`${environments.app.routes.eventDetail}${event.title}`}>Plus d'information</Link>
                    </div>
                )
            }
        </aside>
    );
};

export default EventItem;