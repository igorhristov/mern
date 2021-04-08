import React from "react";
import { getFeaturedEvents } from "../../context/data";
import EventList from "../../components/events/eventList";

const HomeEventPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
      Event Page show features
    </div>
  );
};

export default HomeEventPage;
