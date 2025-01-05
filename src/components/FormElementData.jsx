const FormElementsData = [
    {
      heading: "Personal Information",
      fields: [
        {
          type: "text",
          label: "Username",
          image: "https://example.com/images/username.png",
        },
        {
          type: "email",
          label: "Email Address",
          image: "https://example.com/images/email.png",
        },
        {
          type: "date",
          label: "Date of Birth",
          image: "https://example.com/images/date.png",
        },{
          type: "number",
          label: "Age",
          image: "https://example.com/images/age.png",
        },{
          type: "textarea",
          label: "Comments",
          image: "https://example.com/images/comments.png",
        }
      ],
    },
    {
      heading: "Account Details",
      fields: [
        {
          type: "password",
          label: "Password",
          image: "https://example.com/images/password.png",
        },
        {
          type: "file",
          label: "Upload Avatar",
          image: "https://example.com/images/upload.png",
        },{
          type: "tel",
          label: "Phone Number",
          image: "https://example.com/images/phone.png " ,
        }
      ],
    },
    {
      heading: "Preferences",
      fields: [
        {
          type: "select",
          label: "Country",
          image: "https://example.com/images/country.png",
        },
        {
          type: "checkbox",
          label: "Agree to Terms",
          image: "https://example.com/images/checkbox.png",
        },
        {
          type: "radio",
          label: "Gender",
          image: "https://example.com/images/gender.png",
        },{
          type: "url",
          label: "Website",
          image: "https://example.com/images/website.png", 
        },{
          type : "range", 
          label : "Range", 
          image : "https://example.com/images/range.png"
        }
      ],
    },
  ];
  
  export default FormElementsData;
  