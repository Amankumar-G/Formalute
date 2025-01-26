const config = [
    {
        type: "text",
        name: "text",
        value: "",
        label: "Text Field",
        placeholder: "Enter text",
        required: false,
        pattern: "^[A-Za-z0-9_]+$", // Alphanumeric with underscores
        autocomplete: "text",
    },
    {
        type: "email",
        name: "email",
        value: "",
        label: "Email",
        placeholder: "Enter email",
        required: false,
        autocomplete: "email",
    },
    {
        type: "password",
        name: "password",
        value: "",
        label: "Password",
        placeholder: "Enter password",
        required: false,
        minlength: 8,
        pattern: "", // Minimum 8 characters, at least one letter and one number
        autocomplete: "new-password",
    },
    {
        type: "number",
        name: "number",
        value: "",
        label: "Number",
        placeholder: "Enter a number",
        required: false,
        min: 0,
        max: 100,
        step: 1,
    },
    {
        type: "date",
        name: "date",
        value: "",
        label: "Date",
        placeholder: "Select a date",
        required: false,
        min: "1900-01-01",
        max: "2023-12-31",
    },
    {
        type: "tel",
        name: "tel",
        value: "",
        label: "Phone",
        placeholder: "Enter phone number",
        required: false,
        pattern: "\\d{10}", // 10-digit number
        autocomplete: "tel",
    },
    {
        type: "url",
        name: "url",
        value: "",
        label: "URL",
        placeholder: "Enter a URL",
        required: false,
        pattern: "https?://.*", // Must start with http:// or https://
        autocomplete: "url",
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
    },
    {
        type: "checkbox",
        name: "checkbox",
        label: "Checkbox Label",
        placeholder: "",
        required: false,
    },
    {
        type: "radio",
        name: "radio",
        label: "Radio Group",
        required: false,
        defaultSelected: "option1", // Indicates which option is selected by default
        options: [
            { value: "option1", text: "Option 1" },
            { value: "option2", text: "Option 2" }
        ]
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
    },
    {
        type: "color",
        name: "color",
        value: "#000000",
        label: "Color Picker",
        placeholder: "",
        required: false,
    },
    {
        type: "search",
        name: "search",
        value: "",
        label: "Search",
        placeholder: "Search here",
        required: false,
    },
    {
        type: "hidden",
        name: "hidden",
        value: "12345",
        label: "Hidden Field",
        placeholder: "",
        required: false,
    },
    {
        type: "datetime-local",
        name: "datetime",
        value: "",
        label: "Date & Time",
        placeholder: "",
        required: false,
        min: "2023-01-01T00:00",
        max: "2024-12-31T23:59",
    },
    {
        type: "month",
        name: "month",
        value: "",
        label: "Month Selector",
        placeholder: "",
        required: false,
    },
    {
        type: "week",
        name: "week",
        value: "",
        label: "Week Selector",
        placeholder: "",
        required: false,
    },
    {
        type: "time",
        name: "time",
        value: "",
        label: "Time Selector",
        placeholder: "",
        required: false,
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
    },
    {
        type : "html",
        name : "html",
        value : "h1",
        color : "black",
        italic : false,
        bold : false,
        label : "HTML Content",
        required : false,
        description : "HTML content description",
    },
    {
        type: "divider",
        name: "divider",
    },  
];

export default config;
