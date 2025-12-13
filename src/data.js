export const cvFormSections = [
  {
    id: 1,
    title: "Personal information",
    blocks: [
      {
        id: crypto.randomUUID(),
        inputs: [
          { name: "firstName", placeholder: "First Name", firstName: "" },
          { name: "lastName", placeholder: "Last Name", lastName: "" },
          { name: "title", placeholder: "Title", title: "" },
          { name: "adress", placeholder: "Adress", adress: "" },
          { name: "phoneNumber", placeholder: "Phone Number", phoneNumber: "" },
          { name: "email", placeholder: "Email", email: "" },
          { name: "description", placeholder: "Description", description: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    blocks: [
      {
        id: crypto.randomUUID(),
        inputs: [
          {
            name: "universityName",
            placeholder: "University Name",
            universityName: "",
          },
          { name: "city", placeholder: "City", city: "" },
          { name: "degree", placeholder: "Degree", degree: "" },
          { name: "subject", placeholder: "Subject", subject: "" },
          { name: "fromDate", placeholder: "From (dd/mm/yy)", fromDate: "" },
          { name: "toDate", placeholder: "To (dd/mm/yy)", toDate: "" },
        ],
        clear: [{ btnText: "Delete", variation: "standard", value: "" }],
      },
    ],
    add: [{ btnText: "Add Education", variation: "standard" }],
  },
  {
    id: 3,
    title: "Experience",
    blocks: [
      {
        id: crypto.randomUUID(),
        inputs: [
          { name: "position", placeholder: "Position", position: "" },
          { name: "company", placeholder: "Company", company: "" },
          { name: "city", placeholder: "City", city: "" },
          { name: "fromDate", placeholder: "From (dd/mm/yy)", fromDate: "" },
          { name: "toDate", placeholder: "To (dd/mm/yy)", toDate: "" },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Experience", variation: "standard" }],
  },
];
