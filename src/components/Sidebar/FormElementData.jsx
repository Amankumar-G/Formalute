import {  AiOutlineMail, AiOutlineNumber, AiOutlineComment, AiOutlineLock, AiOutlineUpload, AiOutlinePhone, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCalendarAlt, FaGlobe, FaCheckSquare, FaDotCircle, FaPalette, FaSlidersH } from "react-icons/fa";
import { BiHide, BiText, BiCheckboxSquare,BiSelectMultiple } from "react-icons/bi";
import { MdRadioButtonChecked,MdTextFields,MdLinearScale ,MdHtml  } from "react-icons/md";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { CiSliderHorizontal } from "react-icons/ci";
import { VscHorizontalRule } from "react-icons/vsc";

const FormElementsData = [
  {
    heading: "Personal Information",
    fields: [
      {
        type: "text",
        label: "Text Field",
        image: <MdTextFields size={24}/>,
      },
      {
        type: "email",
        label: "Email Address",
        image: <AiOutlineMail size={24} />,
      },
      {
        type: "date",
        label: "Date of Birth",
        image: <FaCalendarAlt size={24} />,
      },
      {
        type: "number",
        label: "Number",
        image: <AiOutlineNumber size={24} />,
      },
      {
        type: "textarea",
        label: "Textarea",
        image: <AiOutlineComment size={24} />,
      },
    ],
  },
  {
    heading: "Account Details",
    fields: [
      {
        type: "password",
        label: "Password",
        image: <AiOutlineLock size={24} />,
      },
      {
        type: "file",
        label: "Upload File",
        image: <AiOutlineUpload size={24} />,
      },
      {
        type: "tel",
        label: "Telephone",
        image: <AiOutlinePhone size={24} />,
      },
      {
        type: "hidden",
        label: "Hidden Field",
        image: <BiHide size={24} />,
      },
    ],
  },
  {
    heading: "Preferences",
    fields: [
      {
        type: "select",
        label: "Select Box",
        image: <RiCheckboxMultipleFill size={24} />,
      },
      {
        type: "checkbox",
        label: "Single Check",
        image: <FaCheckSquare size={24} />,
      },
      {
        type: "multiple-checkbox",
        label: "Multi - Check",
        image: < BiSelectMultiple  size={24} />,
      },
      {
        type: "radio",
        label: "Multi - Radio",
        image: <MdRadioButtonChecked size={24} />,
      },
      {
        type: "url",
        label: "URL",
        image: <FaGlobe size={24} />,
      },
      {
        type: "range",
        label: "Range",
        image: <CiSliderHorizontal  size={24} />,
      },
    ],
  },
  {
    heading: "Attributes",
    fields: [
      {
        type: "html",
        label: "HTML Content",
        image: <MdHtml  size={24} />,
      },
      {
        type: "color",
        label: "Color Picker",
        image: <FaPalette size={24} />,
      },
      {
        type: "divider",
        label: "Divider",
        image: <VscHorizontalRule  size={24} />,
      },
    ],
  },
];

export default FormElementsData;
