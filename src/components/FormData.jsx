

const FormData = [
    {
      "type": "text",
      "name": "text",
      "value": "",
      "label": "Text Field",
      "placeholder": "Enter your Text",
      "required": true,
      "pattern": "^[A-Za-z0-9_]+$",
      "autocomplete": "text",
      "id": "7ae3b6e0-b2fe-474b-bb89-c92d944e27ad"
    },
    {
      "type": "email",
      "name": "email",
      "value": "",
      "label": "Email Address",
      "placeholder": "Enter your email address",
      "required": true,
      "autocomplete": "email",
      "id": "f0294e07-9f70-4d5d-a38e-7d6884a4fa56"
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
      "id": "0d22ee37-7670-4cfb-9d59-9fb7a1810543"
    },
    {
      "type": "number",
      "name": "age",
      "value": "",
      "label": "Age",
      "placeholder": "Enter your age",
      "required": false,
      "min": 0,
      "max": 120,
      "step": 1,
      "id": "3b65b577-5062-4baf-a56f-a6df0de167fc"
    },
    {
      "type": "textarea",
      "name": "comments",
      "value": "",
      "label": "Comments",
      "placeholder": "Enter your comments here",
      "required": false,
      "maxlength": 500,
      "rows": 5,
      "cols": 30,
      "id": "79ee63f3-4654-44fc-82e5-27274b1463f9"
    },
    {
      "type": "color",
      "name": "favoriteColor",
      "value": "#000000",
      "label": "Favorite Color",
      "placeholder": "",
      "required": false,
      "id": "5ee3e2f8-2893-4ff0-837c-4812f6ddbead"
    },
    {
      "type": "password",
      "name": "password",
      "value": "",
      "label": "Password",
      "placeholder": "Enter your password",
      "required": true,
      "minlength": 8,
      "pattern": "(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}",
      "autocomplete": "new-password",
      "id": "abe1ca85-f8b5-411b-b7e9-a5087e214f9a"
    },
    {
      "type": "file",
      "name": "fileUpload",
      "value": "",
      "label": "Upload File",
      "placeholder": "",
      "required": false,
      "accept": "image/*",
      "multiple": false,
      "id": "ee04bd88-fad5-4c10-9459-6e49362c086f"
    },
    {
      "type": "tel",
      "name": "phone",
      "value": "",
      "label": "Phone Number",
      "placeholder": "Enter your phone number",
      "required": false,
      "pattern": "\\d{10}",
      "autocomplete": "tel",
      "id": "b43633ec-1051-460f-ac2e-46b75734f6f8"
    },
    {
      "type": "hidden",
      "name": "userID",
      "value": "12345",
      "label": "Hidden Field",
      "placeholder": "",
      "required": false,
      "id": "ed038623-7c4c-4632-8547-341bf4364fe5"
    },
    {
      "type": "datetime-local",
      "name": "appointment",
      "value": "",
      "label": "Appointment Date & Time",
      "placeholder": "",
      "required": true,
      "min": "2023-01-01T00:00",
      "max": "2024-12-31T23:59",
      "id": "3068799b-0f72-4814-96c4-9f55e56e845b"
    },
    {
      "type": "month",
      "name": "birthMonth",
      "value": "",
      "label": "Birth Month",
      "placeholder": "",
      "required": false,
      "id": "ba3afc67-7014-4dc2-82f2-e66654a09dba"
    },
    {
      "type": "week",
      "name": "workWeek",
      "value": "",
      "label": "Preferred Work Week",
      "placeholder": "",
      "required": false,
      "id": "7ff68a6f-f21c-4f15-8ddc-eec5b6c29cfc"
    },
    {
      "type": "time",
      "name": "preferredTime",
      "value": "",
      "label": "Preferred Time",
      "placeholder": "",
      "required": false,
      "id": "b22cf03b-b7c3-4d87-809b-88cab201c24e"
    },
    {
      "type": "select",
      "name": "country",
      "value": "",
      "label": "Country",
      "placeholder": "",
      "required": true,
      "options": [
        {
          "label": "United States",
          "value": "us"
        },
        {
          "label": "Canada",
          "value": "ca"
        },
        {
          "label": "United Kingdom",
          "value": "uk"
        },
        {
          "label": "India",
          "value": "in"
        },
        {
          "label": "Australia",
          "value": "au"
        }
      ],
      "id": "7600a44c-e1e8-4da6-9a50-a54262dba1b5"
    },
    {
      "type": "checkbox",
      "name": "acceptTerms",
      "value": "yes",
      "label": "I accept the terms and conditions",
      "placeholder": "",
      "required": true,
      "checked": false,
      "id": "199afa67-df90-45dc-9ffe-a94202b49428"
    },
    {
      "type": "radio",
      "name": "gender",
      "value": "female",
      "label": "Female",
      "placeholder": "",
      "required": true,
      "options": [
          {
              "label": "Male",
          "value": "male"
        },
        {
          "label": "Female",
          "value": "female"
        },
        {
          "label": "Other",
          "value": "other"
        }
      ],
      "id": "613794d6-5a0f-4f0c-8df7-f4ddcab57490"
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
      "id": "808f322a-b1d3-41a0-b60d-9d483c17980b"
    },
    {
      "type": "range",
      "name": "satisfaction",
      "value": "50",
      "label": "Satisfaction Level",
      "placeholder": "",
      "required": false,
      "min": 0,
      "max": 100,
      "step": 1,
      "id": "fdbb1167-5f67-42a4-bed2-8ecf5390623b"
    }
  ]
export default FormData;