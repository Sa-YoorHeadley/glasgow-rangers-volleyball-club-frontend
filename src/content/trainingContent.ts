import type { TrainingContent } from "../types/globals";

export const trainingContent: TrainingContent = {
  hero: {
    title: "Elevate Your Game.",
    tagline: "Training & Competitions",
    subtitle:
      "Join the premier volleyball club in Guyana. Track our sessions and tournaments in real-time.",
    cta: {
      title: "Sync with Google Calendar",
      url: "/registration",
      backgroundColor: "secondary",
      textColor: "tertiary",
    },
    calendarEmbedUrl:
      "https://calendar.google.com/calendar/embed?height=450&wkst=1&ctz=America%2FGuyana&showPrint=0&mode=AGENDA&showCalendars=0&showTz=0&showTitle=0&title=Glasgow%20Rangers%20Volleyball%20Club&src=Z2xhc2dvd3JhbmdlcnN2b2xsZXliYWxsY2x1YkBnbWFpbC5jb20&src=ZW4tZ2IuZ3kjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%230b8043",
  },
  trainingScheduleSection: {
    title: "Weekly Training Schedule",
    description:
      "Join our structured sessions designed for every level of play, from development to elite competition.",
    trainingSchedules: [
      {
        title: "Senior Team Training",
        icon: "mdi:account-group",
        times: [
          {
            day: "Tuesday",
            time: "5:30 PM - 7:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
          {
            day: "Wednesday",
            time: "5:30 PM - 7:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
          {
            day: "Thursday",
            time: "5:30 PM - 7:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
        ],
      },
      {
        title: "Junior Team Training",
        icon: "mdi:academic-cap",
        times: [
          {
            day: "Tuesday",
            time: "4:30 PM - 6:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
          {
            day: "Wednesday",
            time: "4:30 PM - 6:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
          {
            day: "Thursday",
            time: "4:30 PM - 6:30 PM",
            location: {
              name: "Retrieve Hard Court",
              url: "https://maps.app.goo.gl/xyZG3SfpudJN8BHL7",
            },
          },
        ],
      },
    ],
  },
};
