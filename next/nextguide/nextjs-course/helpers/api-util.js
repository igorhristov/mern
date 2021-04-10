export async function getAllEvents() {
  // const response = await fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json');
  // const data = await response.json();
  const data = [
    {
      id: "event1",
      title: "Programming for everyone",
      description: "lorem Every one can learn code!! hello",

      date: "2021-03-12",
      location: "OLD wall street, 3223 Stip",
      image:
        "https://images.pexels.com/photos/4596834/pexels-photo-4596834.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      isFeatured: false,
    },
    {
      id: "event2",
      title: "Programming something else",
      description: "lorem Every one can learn code!! hello",

      date: "2022-04-12",
      location: "OLD wall street, 3223 Newyour",
      image:
        "https://images.pexels.com/photos/3565742/pexels-photo-3565742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      isFeatured: true,
    },

    {
      id: "event3",
      title: "New Yourk",
      description: "lorem Every one can learn code!! hello",

      date: "2022-05-12",
      location: "OLD wall street, 3223 NewyourK",
      image:
        "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      isFeatured: true,
    },
  ];
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
