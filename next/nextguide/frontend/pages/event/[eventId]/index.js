import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../context/data";
import ErrorAlert from "../../../components/event-details/error-alert";
const EventDetailPage = () => {
  const router = useRouter();

  console.log(router);
  const data = getEventById(router.query.eventId);
  console.log(data);

  if (!data) {
    return <ErrorAlert>No Event FOUND</ErrorAlert>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <img height="500px" src={data.image} alt="" />
      <p>{data.description}</p>
    </div>
  );
};

export default EventDetailPage;
