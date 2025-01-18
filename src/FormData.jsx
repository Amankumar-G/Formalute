

const FormData =[
  {
    "type": "text",
    "name": "text",
    "value": "",
    "label": "UserName",
    "placeholder": "Enter your userName",
    "required": true,
    "pattern": "^[A-Za-z0-9_]+$",
    "autocomplete": "text",
    "id": "b746a6fc-8b5d-4932-9abb-c2556e566db5",
    "maxlength": "3",
    "minlength": "-7",
    "spellcheck": "true",
    "size": ""
  },
  {
    "type": "email",
    "name": "email",
    "value": "",
    "label": "Email Address",
    "placeholder": "Enter your email address",
    "required": true,
    "autocomplete": "email",
    "id": "979c29ac-38be-47da-a66d-e6f4f6e9daf6",
    "pattern": "",
    "maxlength": "",
    "minlength": "",
    "spellcheck": "",
    "size": ""
  },
  {
    "type": "date",
    "name": "birthdate",
    "value": "",
    "label": "Date of Birth",
    "placeholder": "Select your birthdate",
    "required": true,
    "min": "1900-01-01",
    "max": "2023-12-31",
    "id": "baa715ce-3edf-473c-8a13-0a024b9b50bb",
    "step": ""
  },
  {
    "type": "number",
    "name": "age",
    "value": "",
    "label": "Age",
    "placeholder": "Enter your age",
    "required": true,
    "min": "18",
    "max": 120,
    "step": 1,
    "id": "dcc48b2a-5f67-437c-a5d0-d692131df846",
    "maxlength": ""
  },
  {
    "type": "textarea",
    "name": "comments",
    "value": "",
    "label": "Comments",
    "placeholder": "Enter your toughts here",
    "required": false,
    "maxlength": 500,
    "rows": 5,
    "cols": 30,
    "id": "c9e47d05-69e7-4633-95f4-80d8e2082250"
  },
  {
    "type": "password",
    "name": "password",
    "value": "",
    "label": "Password",
    "placeholder": "Enter your password keep it safe",
    "required": false,
    "minlength": 8,
    "pattern": "(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}",
    "autocomplete": "new-password",
    "id": "5fd63276-bd0b-40cd-ad11-b7507c81b99a",
    "maxlength": "",
    "spellcheck": "",
    "size": ""
  },
  {
    "type": "file",
    "name": "fileUpload",
    "value": "",
    "label": "Upload File",
    "placeholder": "",
    "required": false,
    "accept": "image/*",
    "multiple": true,
    "id": "19804789-da29-4622-a54e-41d34103fc69",
    "sizeLimit": "1"
  },
  {
    "type": "tel",
    "name": "phone",
    "value": "",
    "label": "Phone Number",
    "placeholder": "Enter your phone number",
    "required": true,
    "pattern": "\\d{10}",
    "autocomplete": "tel",
    "id": "e69af394-5f77-4db1-bfdf-5c9f53adab6b",
    "maxlength": "",
    "minlength": "",
    "spellcheck": "",
    "size": ""
  },
  {
    "type": "hidden",
    "name": "userID",
    "value": "Help",
    "label": "Hidden Field",
    "placeholder": "",
    "required": false,
    "id": "abd7db64-9a12-4972-acec-a0fbb783ffef"
  },
  {
    "type": "select",
    "name": "country",
    "value": "",
    "label": "Country",
    "placeholder": "",
    "required": false,
    "options": [
      {
        "text": "United States",
        "value": "us"
      },
      {
        "text": "Canada",
        "value": "ca"
      },
      {
        "text": "United Kingdom",
        "value": "uk"
      },
      {
        "text": "India",
        "value": "in"
      },
      {
        "text": "Australia",
        "value": "au"
      },
      {
        "value": "india",
        "text": "Gujarat"
      }
    ],
    "id": "3acf2529-0847-47f6-91ff-ca095d370140",
    "multiple": false,
    "size": ""
  },
  {
    "type": "checkbox",
    "name": "acceptTerms",
    "value": "yes",
    "label": "I accept the terms and conditions",
    "placeholder": "",
    "required": false,
    "checked": false,
    "id": "6d724799-9db8-4bb9-aeb7-9dd5d558e9dc"
  },
  {
    "type": "multiple-checkbox",
    "label": "Subscribe to Newsletter",
    "required": true,
    "defaultChecked": false,
    "options": [
      {
        "value": "yes",
        "text": "Yes, I want to receive newsletters"
      },
      {
        "value": "no",
        "text": "No, I do not want to receive newsletters"
      }
    ],
    "description": "This checkbox allows the user to subscribe or unsubscribe from the newsletter.",
    "id": "472a1680-01ca-4623-b5ad-75a43a59e50e"
  },
  {
    "type": "radio",
    "label": "Select your favorite option",
    "required": true,
    "defaultSelected": "option1",
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
    "id": "3e4dce67-7706-44d2-98b7-29aa4bf37bff"
  },
  {
    "type": "url",
    "name": "website",
    "value": "",
    "label": "Website",
    "placeholder": "Enter your website URL",
    "required": false,
    "pattern": "https?://.*",
    "autocomplete": "url",
    "id": "8cdfdc0e-4520-4b55-8bef-8d31e2a908df"
  }
]
export default FormData;