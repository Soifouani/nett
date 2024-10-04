import {FC, ReactElement} from "react";
import EventItem from "./EventItem.tsx";
import {eventCalendar} from "../../data/Data.ts";
import {Event} from "../../models/Event.ts";
import {EventCalendar} from "../../models/EventCalendar.ts";

import "./event.css";
import { ALL_PROJECTS } from "../../utils/Constants.ts";

interface EventListProps {
    selectedMenu: string;
}

const EventList: FC<EventListProps> = ({ selectedMenu }): ReactElement => {

    const filteredEvents = eventCalendar.map((eventCalendar: EventCalendar) => ({
        ...eventCalendar,
        events: eventCalendar.events.filter(event =>
            selectedMenu === ALL_PROJECTS ? true : event.category === selectedMenu
        ),
    })).filter(eventCalendar => eventCalendar.events.length > 0);


    return (
        <section className={"event"}>
            {filteredEvents.map((eventCalendar: EventCalendar, i: number) => (
                <div key={`event_calendar_${i}`}>
                    <span className={"event-month"}>{eventCalendar.month}</span>
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