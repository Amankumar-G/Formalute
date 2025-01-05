const config = [
    {
        type: "text",
        name: "username",
        value: "",
        label: "Username",
        placeholder: "Enter your username",
        required: true
    },
    {
        type: "email",
        name: "email",
        value: "",
        label: "Email Address",
        placeholder: "Enter your email address",
        required: true
    },
    {
        type: "password",
        name: "password",
        value: "",
        label: "Password",
        placeholder: "Enter your password",
        required: true
    },
    {
        type: "number",
        name: "age",
        value: "",
        label: "Age",
        placeholder: "Enter your age",
        required: false
    },
    {
        type: "date",
        name: "birthdate",
        value: "",
        label: "Date of Birth",
        placeholder: "Select your birthdate",
        required: true
    },
    {
        type: "tel",
        name: "phone",
        value: "",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        required: false
    },
    {
        type: "url",
        name: "website",
        value: "",
        label: "Website",
        placeholder: "Enter your website URL",
        required: false
    },
    {
        type: "file",
        name: "fileUpload",
        value: "",
        label: "Upload File",
        placeholder: "",
        required: false
    },
    {
        type: "checkbox",
        name: "acceptTerms",
        value: "yes",
        label: "I accept the terms and conditions",
        placeholder: "",
        required: true
    },
    {
        type: "radio",
        name: "gender",
        value: "female",
        label: "Female",
        placeholder: "",
        required: true
    },
    {
        type: "range",
        name: "satisfaction",
        value: "50",
        label: "Satisfaction Level",
        placeholder: "",
        required: false
    },
    {
        type: "textarea",
        name: "comments",
        value: "",
        label: "Comments",
        placeholder: "Enter your comments here",
        required: false
    }
];

export default config;
