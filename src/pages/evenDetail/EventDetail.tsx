import {useParams} from "react-router";
import {Event} from "../../models/Event.ts";
import {eventCalendar} from "../../data/Data.ts";

import gabarie from "../../assets/images/event/gabarie.jpg";

import "./eventDetail.css"
import {EventCalendar} from "../../models/EventCalendar.ts";

const EventDetail = () => {
    const {title} = useParams();

    const event: Event | undefined  = eventCalendar.map((eventCalendar: EventCalendar) => eventCalendar.events.find((e: Event) => e.title === title));
    const nextEvents: Event[] | undefined = eventCalendar.map((eventCalendar: EventCalendar) => eventCalendar.events.filter((e: Event) => e.category === event?.category));

    return (
        <>
            {
                event !== undefined  ? (
                    <>
                        <h1 className="event-title">{event?.title}</h1>
                        <section className="event-detail">
                            <div>
                                <div className="event-info">
                                    <img src={gabarie} alt={""}/>
                                    <div className="event-info-date">
                                        <span>{event.date}</span>
                                        <span>{event.localisation}</span>
                                    </div>
                                </div>
                                <p>{event.description}</p>
                                <span>Attention : {event.places} places disponibles</span>
                            </div>
                            <div className="next-event">
                                {
                                    nextEvents?.map((nextEvent: EventProps) => (
                                        <>
                                            <span>{nextEvent.title}</span>
                                        </>
                                    ))
                                }
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <h1>Événement non trouvé</h1>
                    </>
                )
            }
        </>

    );
};

export default EventDetail;