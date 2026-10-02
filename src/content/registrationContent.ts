import type { RegistrationContent } from "../types/globals";

export const registrationContent: RegistrationContent = {
  title: "Join the Gold Standard",
  tagline: "Registration",
  subtitle:
    "Take the first step towards elite volleyball. Fill out the form below to register your interest in joining Glasgow Rangers Volleyball Club. One Shot One Kill.",
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
        name: "age",
        label: "Age",
        type: "number",
        required: true,
        placeholder: "Enter your age",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "Enter your phone number",
      },
      {
        name: "jerseyNumber",
        label: "Preferred Jersey Number",
        type: "number",
        required: false,
        placeholder: "Enter your preferred jersey number",
      },
      {
        name: "jerseySize",
        label: "Preferred Jersey Size",
        type: "select",
        options: ["XS", "S", "M", "L", "XL", "XXL"],
        required: false,
        placeholder: "Select your preferred jersey size...",
      },
      {
        name: "waistSize",
        label: "Preferred Waist Size",
        type: "select",
        options: ["XS", "S", "M", "L", "XL", "XXL"],
        required: false,
        placeholder: "Select your preferred waist size...",
      },
      {
        name: "shoeSize",
        label: "Preferred Shoe Size (US)",
        type: "select",
        options: [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
        ],
        required: false,
        placeholder: "Select your preferred shoe size (US)...",
      },
      {
        name: "position",
        label: "Position",
        type: "select",
        options: [
          "Middle Blocker",
          "Outside Hitter",
          "Setter",
          "Libero",
          "Opposite Hitter",
          "Defensive Specialist",
          "Not Sure",
        ],
        required: true,
        placeholder: "Select your primary position...",
      },
      {
        name: "experienceLevel",
        label: "Experience Level",
        type: "select",
        options: ["Beginner", "Intermediate", "Advanced", "Not Sure"],
        required: true,
        placeholder: "Select your volleyball experience level...",
      },
      {
        name: "additionalInfo",
        label: "Additional Information",
        type: "text-area",
        required: false,
        placeholder:
          "Tell us about your previous playing experience, preferred position, or any questions you might have...",
      },
    ],
    submitButton: {
      title: "Submit Application",
      backgroundColor: "tertiary",
      textColor: "white",
      url: "/submit-registration",
    },
  },
  whatToExpect: {
    title: "What to Expect",
    points: [
      {
        icon: "mdi:number-1-circle",
        title: "A Welcoming Community",
        subtitle:
          "A welcoming and inclusive environment for players of all skill levels.",
      },
      {
        icon: "mdi:number-2-circle",
        title: "Expert Coaching",
        subtitle: "Expert coaching from experienced players and coaches.",
      },
      {
        icon: "mdi:number-3-circle",
        title: "Skill Development",
        subtitle:
          "Regular training sessions focused on skill development and team play.",
      },
    ],
  },
};
