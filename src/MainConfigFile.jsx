export default [
  {
    "type": "text",
    "name": "text",
    "value": "",
    "label": "Text Field",
    "placeholder": "Enter text",
    "required": false,
    "pattern": "",
    "autocomplete": false,
    "spellcheck": false,
    "classname": "text",
    "errormessagepattern": "Invalid format.",
    "errormessagemaxlength": "Value too long.",
    "errormessageminlength": "Value too short.",
    "errormessage": "This field is required"
  },
  {
    "type": "email",
    "name": "email",
    "value": "",
    "label": "Email",
    "placeholder": "Enter email",
    "required": false,
    "autocomplete": false,
    "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    "spellcheck": false,
    "classname": "email",
    "errormessagepattern": "Invalid format.",
    "errormessagemaxlength": "Value too long.",
    "errormessageminlength": "Value too short.",
    "errormessage": "This field is required"
  },
  {
    "type": "password",
    "name": "password",
    "value": "",
    "label": "Password",
    "placeholder": "Enter password",
    "required": false,
    "pattern": "",
    "classname": "password",
    "errormessagepattern": "Invalid format.",
    "errormessagemaxlength": "Value too long.",
    "errormessageminlength": "Value too short",
    "errormessage": "This field is required"
  },
  {
    "type": "number",
    "name": "number",
    "value": "",
    "label": "Number",
    "placeholder": "Enter a number",
    "required": false,
    "min": 0,
    "max": 0,
    "step": 1,
    "classname": "number",
    "errormessagemax": "Value too high",
    "errormessagemin": "Value too low",
    "errormessage": "This field is required"
  },
  {
    "type": "date",
    "name": "date",
    "value": "",
    "label": "Date",
    "required": false,
    "min": "1900-01-01",
    "max": "2025-02-08",
    "classname": "date",
    "errormessage": "This field is required"
  },
  {
    "type": "tel",
    "name": "tel",
    "value": "",
    "label": "Phone",
    "placeholder": "Enter phone number",
    "required": false,
    "pattern": "\\d{10}",
    "autocomplete": false,
    "spellcheck": false,
    "classname": "tel",
    "errormessagepattern": "Invalid format.",
    "errormessagemaxlength": "Value too long.",
    "errormessageminlength": "Value too short",
    "errormessage": "This field is required"
  },
  {
    "type": "url",
    "name": "url",
    "value": "",
    "label": "URL",
    "placeholder": "Enter a URL",
    "autocomplete": false,
    "spellcheck": false,
    "pattern": "https?://.*",
    "classname": "url",
    "errormessagepattern": "Invalid format.",
    "errormessagemaxlength": "Value too long.",
    "errormessageminlength": "Value too short",
    "errormessage": "This field is required"
  },
  {
    "type": "file",
    "name": "file",
    "value": "",
    "label": "File Upload",
    "placeholder": "",
    "required": false,
    "sizelimit": 10,
    "accept": "image/*",
    "multiple": false,
    "classname": "file",
    "errormessage": "This field is required",
    "errormessagesizelimit": "File exceeds allowed size"
  },
  {
    "type": "checkbox",
    "name": "checkbox",
    "label": "Checkbox Label",
    "placeholder": "",
    "required": false,
    "classname": "checkbox",
    "errormessage": "This field is required"
  },
  {
    "type": "radio",
    "name": "radio",
    "label": "Radio Group",
    "required": false,
    "options": [
      {
        "value": "option1",
        "text": "Option 1"
      },
      {
        "value": "option2",
        "text": "Option 2"
      }
    ],
    "classname": "radio",
    "errormessage": "This field is required"
  },
  {
    "type": "range",
    "name": "range",
    "value": "50",
    "label": "Range Selector",
    "placeholder": "",
    "required": false,
    "min": 0,
    "max": 100,
    "step": 1,
    "classname": "range",
    "errormessagemax": "Value too high",
    "errormessagemin": "Value too low",
    "errormessage": "This field is required"
  },
  {
    "type": "textarea",
    "name": "textarea",
    "value": "",
    "label": "Textarea",
    "placeholder": "Enter text here",
    "required": false,
    "maxlength": 500,
    "rows": 5,
    "cols": 30,
    "classname": "textarea",
    "errormessage": "This field is required"
  },
  {
    "type": "color",
    "name": "color",
    "value": "#000000",
    "label": "Color Picker",
    "placeholder": "",
    "required": false,
    "classname": "color"
  },
  {
    "type": "hidden",
    "name": "hidden",
    "value": "12345",
    "label": "Hidden Field",
  },
  {
    "type": "select",
    "name": "select",
    "value": "",
    "label": "Dropdown",
    "placeholder": "",
    "required": false,
    "options": [
      {
        "text": "Option 1",
        "value": "option1"
      },
      {
        "text": "Option 2",
        "value": "option2"
      },
      {
        "text": "Option 3",
        "value": "option3"
      }
    ],
    "classname": "select",
    "errormessage": "This field is required"
  },
  {
    "type": "multiple-checkbox",
    "name": "multipleCheckbox",
    "label": "Multiple Checkbox Group",
    "required": false,
    "defaultchecked": false,
    "options": [
      {
        "value": "option1",
        "text": "Option 1"
      },
      {
        "value": "option2",
        "text": "Option 2"
      }
    ],
    "value": [],
    "description": "",
    "classname": "multipleCheckbox",
    "errormessage": "This field is required"
  },
  {
    "type": "html",
    "tag": "h1",
    "color": "#000000",
    "italic": false,
    "bold": false,
    "label": "HTML Content",
    "fontSize" : "16",
    "textAlign" : "left",
    "required": false,
    "description": "",
    "classname": "html"
  },
  {
    "type": "divider",
    "classname": "divider"
  },
  {
    "type": "button",
    "name": "button",
    "classname": "button"
  }
];
