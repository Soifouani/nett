import {ReactElement} from "react";
import EventItem from "./EventItem.tsx";
import {eventCalendar} from "../../data/Data.ts";
import {Event} from "../../models/Event.ts";
import {EventCalendar} from "../../models/EventCalendar.ts";

import "./event.css";

const EventList = (): ReactElement => {

    const fullYear = new Date().getFullYear();

    return (
        <section id="event">
            {eventCalendar.map((eventCalendar: EventCalendar, i: number) => (
                <div key={`event_calendar_${i}`}>
                    <span className={"event_month"}>{`${eventCalendar.month} ${fullYear}`}</span>
                    {
                        eventCalendar.events.map((event: Event, index: number) => (
                            <section key={`event_item_${index}`} className="event-container">
                                <EventItem event={event}/>
                            </section>
                        ))
                    }
                </div>
            ))}
        </section>
    );
};
export default EventList;