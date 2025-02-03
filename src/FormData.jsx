

const FormData =[
  {
    "partitionIndex": 1,
    "elements": [
      {
        "type": "text",
        "name": "text",
        "value": "",
        "label": "Text Field",
        "placeholder": "Enter text",
        "required": false,
        "pattern": "",
        "autocomplete": "text",
        "className": "text",
        "id": "605ed791-f13c-4fde-ad22-076c80a40bce"
      },
      {
        "type": "email",
        "name": "email",
        "value": "",
        "label": "Email",
        "placeholder": "Enter email",
        "required": false,
        "autocomplete": "email",
        "className": "email",
        "id": "21af0a13-432d-40df-9a9f-84e617bb077c"
      },
      {
        "type": "date",
        "name": "date",
        "value": "",
        "label": "Date",
        "placeholder": "Select a date",
        "required": false,
        "min": "1900-01-01",
        "max": "2023-12-31",
        "className": "date",
        "id": "3aba1cf0-c0b6-4239-ae95-0ec017d912f3"
      },
      {
        "type": "number",
        "name": "number",
        "value": "",
        "label": "Number",
        "placeholder": "Enter a number",
        "required": false,
        "min": 0,
        "max": 100,
        "step": 1,
        "className": "number",
        "id": "3b16ee13-ee8d-420d-9b0f-f84a494f5785"
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
        "className": "textarea",
        "id": "1b263a59-d19b-45aa-9693-576df61558f1"
      },
      {
        "type": "password",
        "name": "password",
        "value": "",
        "label": "Password",
        "placeholder": "Enter password",
        "required": false,
        "minlength": 8,
        "pattern": "",
        "autocomplete": "new-password",
        "className": "password",
        "id": "75e38e0f-724f-4807-9113-8b27d4238208"
      },
      {
        "type": "file",
        "name": "file",
        "value": "",
        "label": "File Upload",
        "placeholder": "",
        "required": false,
        "sizeLimit": 10,
        "accept": "image/*",
        "multiple": false,
        "className": "file",
        "id": "19e00c0b-8fa9-42c7-babd-d11948bea786"
      },
      {
        "type": "tel",
        "name": "tel",
        "value": "",
        "label": "Phone",
        "placeholder": "Enter phone number",
        "required": false,
        "pattern": "\\d{10}",
        "autocomplete": "tel",
        "className": "tel",
        "id": "d3054faf-def8-483b-82be-97be52bf9e1d"
      },
      {
        "type": "hidden",
        "name": "hidden",
        "value": "12345",
        "label": "Hidden Field",
        "placeholder": "",
        "required": false,
        "className": "hidden",
        "id": "88860646-2b7e-476c-aaf8-8048e66e7307"
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
        "className": "select",
        "id": "1b367016-4597-4cb1-be37-97bf88613f8f"
      },
      {
        "type": "checkbox",
        "name": "checkbox",
        "label": "Checkbox Label",
        "placeholder": "",
        "required": false,
        "className": "checkbox",
        "id": "a125a129-4ec4-4890-b401-ca1bcd3ef1d8"
      },
      {
        "type": "multiple-checkbox",
        "name": "multipleCheckbox",
        "label": "Multiple Checkbox Group",
        "required": false,
        "defaultChecked": false,
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
        "description": "Description of the checkbox group.",
        "className": "multipleCheckbox",
        "id": "8af00ae4-d195-404b-bc26-2e6f939af4c9"
      },
      {
        "type": "radio",
        "name": "radio",
        "label": "Radio Group",
        "required": false,
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
        "className": "radio",
        "id": "2f3273ce-6cc4-4449-8073-d2582c8b537b"
      },
      {
        "type": "url",
        "name": "url",
        "value": "",
        "label": "URL",
        "placeholder": "Enter a URL",
        "required": false,
        "pattern": "https?://.*",
        "autocomplete": "url",
        "className": "url",
        "id": "9108462a-93b7-47a4-9eb2-db91fde21aef"
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
        "className": "range",
        "id": "a2c2a78d-5d90-48b3-bafa-4b5e4dba5693"
      },
      {
        "type": "html",
        "name": "html",
        "value": "h1",
        "color": "black",
        "italic": false,
        "bold": false,
        "label": "HTML Content",
        "required": false,
        "description": "HTML content description",
        "className": "html",
        "id": "3c8fb8b8-2748-4fc2-8c5e-59d0d95c765e"
      },
      {
        "type": "color",
        "name": "color",
        "value": "#000000",
        "label": "Color Picker",
        "placeholder": "",
        "required": false,
        "className": "color",
        "id": "66b10c01-09a6-4658-a8c8-4edaafd62d5e"
      },
      {
        "type": "divider",
        "name": "divider",
        "className": "divider",
        "id": "7b5aaf06-3fae-4427-b338-5134a5e57d02"
      }
    ]
  }
]
export default FormData;