import type { EventContent } from "../types/globals";

export const eventContent: EventContent = {
  title: "Exciting Events Ahead",
  subtitle:
    "Join us for our upcoming volleyball matches, tournaments, and social events. Check back often for updates and new events!",
  events: [
    {
      title: "Bartica Invitational Volleyball Tournament",
      subtitle: "Exciting match between top teams from across Guyana",
      location: {
        title: "Glasgow Sports Arena",
        url: "https://maps.google.com/?q=Glasgow+Sports+Arena",
      },
      date: "2026-07-04T18:00:00Z",
      type: "Tournament",
    },
    {
      title: "Glasgow Rangers Karaoke Night",
      subtitle: "Join us for a fun-filled evening of music and entertainment",
      location: {
        title: "Glasgow Sports Arena",
        url: "https://maps.google.com/?q=Glasgow+Sports+Arena",
      },
      date: "2026-06-28T24:00:00Z",
      type: "Social",
    },
  ],
};
