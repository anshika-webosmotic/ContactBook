const ContactForm = [
  {
    type: "text",
    name: "fname",
    id: "fname",
    key: "First Name",
    placeholder: "Enter Full Name",
  },
  
  {
    type: "email",
    name: "email",
    id: "email",
    key: "Email",
    placeholder: "Enter Email",
    required: "true",
  },
  {
    type: "text",
    name: "phone",
    id: "phone",
    key: "Phone Number",
    placeholder: "Enter Phone Number",
    pattern: "[0-9]{10}",
    required: "true"
  },
  
];

export default ContactForm;
