const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/programming.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Kyrgyzstan",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Central Asia Kyrgyzstan",
    date: "2021-05-30",
    image: "images/kyrgyzstan.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Productivity while working as Software Engineer",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/productivity.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Beautiful island Taiwan",
    description:
      "Taiwan is the beatufil island located in pacific ocean, green, safe, kind and island with generosity people",
    location: "Taiwan",
    date: "2023-01-12",
    image: "images/taiwan.jpg",
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
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
