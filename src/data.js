export const cvFormSections = [
  {
    id: crypto.randomUUID(),
    title: "Personal information",
    info: {
      id: crypto.randomUUID(),
      inputs: [
        {
          type: "text",
          name: "description",
          placeholder: "Description",
          value: "",
        },
        {
          type: "text",
          name: "firstName",
          placeholder: "First Name",
          value: "",
        },
        {
          type: "text",
          name: "lastName",
          placeholder: "Last Name",
          value: "",
        },
        { type: "text", name: "title", placeholder: "Title", value: "" },
        { type: "file", name: "photo", placeholder: "Photo", value: false },
        { type: "text", name: "adress", placeholder: "Adress", value: "" },
        {
          type: "text",
          name: "phoneNumber",
          placeholder: "Phone Number",
          value: "",
        },
        { type: "text", name: "email", placeholder: "Email", value: "" },
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
            value: "",
          },
          { type: "text", name: "city", placeholder: "City", value: "" },
          { type: "text", name: "degree", placeholder: "Degree", value: "" },
          {
            type: "text",
            name: "subject",
            placeholder: "Subject",
            value: "",
          },
          {
            type: "text",
            name: "fromDate",
            placeholder: "From (dd/mm/yy)",
            value: "",
          },
          {
            type: "text",
            name: "toDate",
            placeholder: "To (dd/mm/yy)",
            value: "",
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
            value: "",
          },
          {
            type: "text",
            name: "company",
            placeholder: "Company",
            value: "",
          },
          { type: "text", name: "city", placeholder: "City", value: "" },
          {
            type: "text",
            name: "fromDate",
            placeholder: "From (dd/mm/yy)",
            value: "",
          },
          {
            type: "text",
            name: "toDate",
            placeholder: "To (dd/mm/yy)",
            value: "",
          },
        ],
        clear: [{ btnText: "Delete", variation: "standard" }],
      },
    ],
    add: [{ btnText: "Add Experience", variation: "standard" }],
  },
];
