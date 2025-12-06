export const cvFormSections = [
  {
    title: "Personal information",
    inputs: [
      { name: "First Name" },
      { name: "Last Name" },
      { name: "Title" },
      { name: "Adress" },
      { name: "Phone Number" },
      { name: "Email" },
      { name: "Description" },
    ],
  },
  {
    title: "Education",
    inputs: [
      { name: "University Name" },
      { name: "City" },
      { name: "Degree" },
      { name: "Subject" },
      { name: "From (dd/mm/yy)" },
      { name: "To (dd/mm/yy)" },
    ],
    buttons: [
      { btnText: "Delete", variation: "standard" },
      { btnText: "Add Education", variation: "standard" },
    ],
  },
  {
    title: "Experience",
    inputs: [
      { name: "Position" },
      { name: "Company" },
      { name: "City" },
      { name: "From (dd/mm/yy)" },
      { name: "To (dd/mm/yy)" },
    ],
    buttons: [
      { btnText: "Delete", variation: "standard" },
      { btnText: "Add Experience", variation: "standard" },
    ],
  },
];
