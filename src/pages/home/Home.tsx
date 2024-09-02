import Description from "../../components/description/Description.tsx";
import EventList from "../../components/event/EventList.tsx";

import "./home.css";

const Home = () => {
    return (
        <>
            <Description />
            <EventList />
        </>
    );
};

export default Home;