export const cvFormSections = [
  {
    id: 1,
    title: "Personal information",
    sec: [
      {
        id: crypto.randomUUID(),
        finded: false,
        inputs: [
          { name: "firstName", placeholder: "First Name" },
          { name: "lastName", placeholder: "Last Name" },
          { name: "title", placeholder: "Title" },
          { name: "adress", placeholder: "Adress" },
          { name: "phoneNumber", placeholder: "Phone Number" },
          { name: "email", placeholder: "Email" },
          { name: "description", placeholder: "Description" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    sec: [
      {
        id: crypto.randomUUID(),
        finded: false,
        inputs: [
          { name: "universityName", placeholder: "University Name" },
          { name: "city", placeholder: "City" },
          { name: "degree", placeholder: "Degree" },
          { name: "subject", placeholder: "Subject" },
          { name: "fromDate", placeholder: "From (dd/mm/yy)" },
          { name: "toDate", placeholder: "To (dd/mm/yy)" },
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
        id: crypto.randomUUID(),
        finded: false,
        inputs: [
          { name: "position", placeholder: "Position" },
          { name: "company", placeholder: "Company" },
          { name: "city", placeholder: "City" },
          { name: "fromDate", placeholder: "From (dd/mm/yy)" },
          { name: "toDate", placeholder: "To (dd/mm/yy)" },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Experience", variation: "standard" }],
  },
];

export const cvSections = {
  personalinformation: [
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
