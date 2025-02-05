const config = [
    {
        
        type: "text",
        name: "text",
        value: "",
        label: "Text Field",
        placeholder: "Enter text",
        required: false,
        pattern: "", 
        autoComplete: false,
        spellCheck : false,
        className: "text",
        errorMessagePattern: "Invalid format.",
        errorMessageMaxLength: "Value too long.",
        errorMessageMinLength: "Value too short.",
        errorMessage: "This field is required"
    },
    {
        type: "email",
        name: "email",
        value: "",
        label: "Email",
        placeholder: "Enter email",
        required: false,
        autoComplete: false,
        spellCheck : false,
        className: "email",
        errorMessagePattern: "Invalid format.",
        errorMessageMaxLength: "Value too long.",
        errorMessageMinLength: "Value too short.",
        errorMessage: "This field is required"
    },
    {
        type: "password",
        name: "password",
        value: "",
        label: "Password",
        placeholder: "Enter password",
        required: false,
        minLength: 8,
        pattern: "", 
        autoComplete: false,
        spellCheck : false,
        className: "password",
        errorMessagePattern: "Invalid format.",
        errorMessageMaxLength: "Value too long.",
        errorMessageMinLength: "Value too short",
        errorMessage: "This field is required"
    },
    {
        type: "number",
        name: "number",
        value: "",
        label: "Number",
        placeholder: "Enter a number",
        required: false,
        min: 0,
        max: 0,
        step: 1,
        className: "number",
        errorMessageMax: "Value too high",
        errorMessageMin: "Value too low",
        errorMessage: "This field is required",
    },
    {
        type: "date",
        name: "date",
        value: "",
        label: "Date",
        placeholder: "Select a date",
        required: false,
        min: "1900-01-01",
        max: new Date().toISOString().split('T')[0],
        className: "date",
        errorMessage: "This field is required"
    },
    {
        type: "tel",
        name: "tel",
        value: "",
        label: "Phone",
        placeholder: "Enter phone number",
        required: false,
        pattern: "\\d{10}",
        autoComplete: false,
        spellCheck : false,
        className: "tel",
        errorMessagePattern: "Invalid format.",
        errorMessageMaxLength: "Value too long.",
        errorMessageMinLength: "Value too short",
        errorMessage: "This field is required"
    },
    {
        type: "url",
        name: "url",
        value: "",
        label: "URL",
        placeholder: "Enter a URL",
        autoComplete: false,
        spellCheck : false,
        pattern: "https?://.*",
        className: "url",
        errorMessagePattern: "Invalid format.",
        errorMessageMaxLength: "Value too long.",
        errorMessageMinLength: "Value too short",
        errorMessage: "This field is required"
    },
    {
        type: "file",
        name: "file",
        value: "",
        label: "File Upload",
        placeholder: "",
        required: false,
        sizeLimit: 10, // File size limit in MB
        accept: "image/*", // Accept only image files
        multiple: false,
        className: "file",
        errorMessage : "This field is required",
        errorMessageSizeLimit : "File exceeds allowed size"
    },
    {
        type: "checkbox",
        name: "checkbox",
        label: "Checkbox Label",
        placeholder: "",
        required: false,
        className: "checkbox",
        errorMessage :"This field is required"
    },
    {
        type: "radio",
        name: "radio",
        label: "Radio Group",
        required: false,
        options: [
            { value: "option1", text: "Option 1" },
            { value: "option2", text: "Option 2" }
        ],
        className: "radio",
        errorMessage: "This field is required"
    },
    {
        type: "range",
        name: "range",
        value: "50",
        label: "Range Selector",
        placeholder: "",
        required: false,
        min: 0,
        max: 100,
        step: 1,
        className: "range",
        errorMessageMax:  "Value too high",
        errorMessageMin:  "Value too low",
        errorMessage: "This field is required",
    
    },
    {
        type: "textarea",
        name: "textarea",
        value: "",
        label: "Textarea",
        placeholder: "Enter text here",
        required: false,
        maxlength: 500,
        rows: 5,
        cols: 30,
        className: "textarea",
        errorMessage: "This field is required",

    },
    {
        type: "color",
        name: "color",
        value: "#000000",
        label: "Color Picker",
        placeholder: "",
        required: false,
        className: "color",
    },
    {
        type: "hidden",
        name: "hidden",
        value: "12345",
        label: "Hidden Field",
        required: false,
        className: "hidden",
    },
    {
        type: "select",
        name: "select",
        value: "",
        label: "Dropdown",
        placeholder: "",
        required: false,
        options: [
            { text: "Option 1", value: "option1" },
            { text: "Option 2", value: "option2" },
            { text: "Option 3", value: "option3" }
        ],
        className: "select",
        errorMessage: "This field is required",
    },
    {
        type: "multiple-checkbox", // Type of element
        name: "multipleCheckbox", // Name of the element
        label: "Multiple Checkbox Group", // Label for the checkbox
        required: false, // Checkbox is required
        defaultChecked: false, // The checkbox is not checked by default
        options: [ // Options for the checkbox (useful for grouped checkboxes)
            { value: "option1", text: "Option 1" },
            { value: "option2", text: "Option 2" }
        ],
        value: [],
        description: "Description of the checkbox group.", // Optional description
        className: "multipleCheckbox",
        errorMessage: "This field is required",
    },
    {
        type : "html",
        tag : "h1",
        color : "black",
        italic : false,
        bold : false,
        label : "HTML Content",
        required : false,
        description : "HTML content description",
        className: "html",
    },
    {
        type: "divider",
        className: "divider",
    },
    {
        type : "button",
        name : "button",
        className: "button",
    }
];

export default config;
