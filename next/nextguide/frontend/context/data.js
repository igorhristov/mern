const DUMMY_EVENTS = [
  {
    id: "event1",
    title: "Programming for everyone",
    description: "lorem Every one can learn code!! hello",

    mydate: "2021-03-12",
    location: "OLD wall street, 3223 Stip",
    image:
      "https://images.pexels.com/photos/3288790/pexels-photo-3288790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    isFeatured: true,
  },
  {
    id: "event2",
    title: "Networking for everyone",
    description: "Networking is best,  Every one can learn code!! hello",
    mydate: "2021-02-22",
    location: "OLD wall street, 3223 Stip",
    image:
      "https://images.pexels.com/photos/3288790/pexels-photo-3288790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    isFeatured: true,
  },
  {
    id: "event3",
    title: "fullstack",
    description:
      "Fullstack Coding with pictures is best  Every one can learn code!! hello",

    mydate: "2021-02-21",
    location: "Best wall street, 3223 Struga",
    image:
      "https://images.pexels.com/photos/3288790/pexels-photo-3288790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
 

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.mydate);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
