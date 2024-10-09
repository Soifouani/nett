import {FC, ReactElement, useMemo} from "react";
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

    const filteredEvents = useMemo(() => {
        return eventCalendar
            .map((calendar: EventCalendar) => ({
                ...calendar,
                events: calendar.events.filter((event: Event) =>
                    selectedMenu === ALL_PROJECTS ? true : event.category === selectedMenu
                ),
            }))
            .filter(calendar => calendar.events.length > 0);
    }, [selectedMenu]);


    return (
        <section className="event">
            {filteredEvents.map((eventCalendar: EventCalendar, i: number) => (
                <div key={`event_calendar_${i}`} className="event-calendar">
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