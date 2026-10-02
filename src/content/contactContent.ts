import type { ContactContent } from "../types/globals";

export const contactContent: ContactContent = {
  title: "Get in Touch",
  subtitle:
    "We'd love to hear from you. Whether you have a question about joining, upcoming matches, or sponsorship opportunities, our team is ready to answer all your questions.",
  form: {
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        required: true,
        placeholder: "Enter the subject of your message",
      },
      {
        name: "message",
        label: "Message",
        type: "text-area",
        required: true,
        placeholder: "Enter your message",
      },
    ],
    submitButton: {
      title: "Send Message",
      backgroundColor: "tertiary",
      textColor: "neutral",
      url: "/submit-c",
    },
  },
};
