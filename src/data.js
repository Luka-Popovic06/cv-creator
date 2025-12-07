export const cvFormSections = [
  {
    id: 1,
    title: "Personal information",
    sec: [
      {
        secId: crypto.randomUUID(),
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
    ],
  },
  {
    id: 2,
    title: "Education",
    sec: [
      {
        secId: crypto.randomUUID(),
        inputs: [
          { name: "University Name" },
          { name: "City" },
          { name: "Degree" },
          { name: "Subject" },
          { name: "From (dd/mm/yy)" },
          { name: "To (dd/mm/yy)" },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Education", variation: "standard" }],
  },
  {
    id: 3,
    title: "Experience",
    sec: [
      {
        secId: crypto.randomUUID(),
        inputs: [
          { name: "Position" },
          { name: "Company" },
          { name: "City" },
          { name: "From (dd/mm/yy)" },
          { name: "To (dd/mm/yy)" },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Experience", variation: "standard" }],
  },
];

export const cvSections = {
  personalInformation: [
    {
      firstName: "",
      lastName: "",
      title: "",
      adress: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
  ],
  education: [
    {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      fromDate: "",
      toDate: "",
    },
  ],
  experience: [
    {
      position: "",
      company: "",
      city: "",
      fromDate: "",
      toDate: "",
    },
  ],
};
