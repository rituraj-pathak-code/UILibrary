import TextField from "../components/TextField";
import { IoEye } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export const basicTextFieldArray = [
  <TextField type="text" placeholder="Enter here" key={1} />,
  <TextField type="text" startIcon={<FaUser size={14} color="gray"/>} placeholder="Username" key={2} />,
];

export const coloredTextFieldArray = [
  <TextField type="text" placeholder="Enter here" category="primary" key={1} />,
  <TextField type="text" placeholder="Enter here" category="secondary" key={2} />,
  <TextField type="text" placeholder="Enter here" category="success" key={3} />,
  <TextField type="text" placeholder="Enter here" category="info" key={4} />,
  <TextField type="text" placeholder="Enter here" category="warning" key={5} />,
  <TextField type="text" placeholder="Enter here" category="error" key={6} />,
];
export const sizeTextFieldArray = [
  <TextField type="text" placeholder="Enter here" size={'small'} key={1} />,
  <TextField type="text" placeholder="Enter here" key={1} />,
  <TextField type="text" placeholder="Enter here" size={'large'} key={2} />,
];

 export const errorTextFieldArray = [ <TextField
    type="text"
    placeholder="Enter here"
    color="error"
    errorMessage="Username unavailable"
    key={1}
  />,]
