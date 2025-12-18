export const cvFormSections = [
  {
    id: crypto.randomUUID(),
    title: "Personal information",
    info: {
      id: crypto.randomUUID(),
      inputs: [
        {
          type: "text",
          name: "firstName",
          placeholder: "First Name",
          firstName: "",
        },
        {
          type: "text",
          name: "lastName",
          placeholder: "Last Name",
          lastName: "",
        },
        { type: "text", name: "title", placeholder: "Title", title: "" },
        { type: "file", name: "photo", placeholder: "Photo", photo: false },
        { type: "text", name: "adress", placeholder: "Adress", adress: "" },
        {
          type: "text",
          name: "phoneNumber",
          placeholder: "Phone Number",
          phoneNumber: "",
        },
        { type: "text", name: "email", placeholder: "Email", email: "" },
        {
          type: "text",
          name: "description",
          placeholder: "Description",
          description: "",
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Education",
    blocks: [
      {
        id: crypto.randomUUID(),
        inputs: [
          {
            type: "text",
            name: "universityName",
            placeholder: "University Name",
            universityName: "",
          },
          { type: "text", name: "city", placeholder: "City", city: "" },
          { type: "text", name: "degree", placeholder: "Degree", degree: "" },
          {
            type: "text",
            name: "subject",
            placeholder: "Subject",
            subject: "",
          },
          {
            type: "text",
            name: "fromDate",
            placeholder: "From (dd/mm/yy)",
            fromDate: "",
          },
          {
            type: "text",
            name: "toDate",
            placeholder: "To (dd/mm/yy)",
            toDate: "",
          },
        ],
        clear: [{ btnText: "Delete", variation: "standard", value: "" }],
      },
    ],
    add: [{ btnText: "Add Education", variation: "standard" }],
  },
  {
    id: crypto.randomUUID(),
    title: "Experience",
    blocks: [
      {
        id: crypto.randomUUID(),
        inputs: [
          {
            type: "text",
            name: "position",
            placeholder: "Position",
            position: "",
          },
          {
            type: "text",
            name: "company",
            placeholder: "Company",
            company: "",
          },
          { type: "text", name: "city", placeholder: "City", city: "" },
          {
            type: "text",
            name: "fromDate",
            placeholder: "From (dd/mm/yy)",
            fromDate: "",
          },
          {
            type: "text",
            name: "toDate",
            placeholder: "To (dd/mm/yy)",
            toDate: "",
          },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Experience", variation: "standard" }],
  },
];
