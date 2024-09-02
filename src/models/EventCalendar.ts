import {Event} from "./Event.ts";

export interface EventCalendar {
    month: string;
    events: Event[];
}