import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../../context/data";
import EventList from "../../../components/events/eventList";
import EventsSearch from "../../../components/events/events-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/event/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <h1>List all Events Here</h1>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
