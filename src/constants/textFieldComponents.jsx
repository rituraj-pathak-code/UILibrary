import TextField from "../components/TextField";

export const basicTextFieldArray = [
  <TextField type="text" placeholder="Enter here" key={1} />,
  <TextField type="password" placeholder="Enter here" key={2} />,
];

export const coloredTextFieldArray = [
  <TextField type="text" placeholder="Enter here" color="success" key={1} />,
  <TextField type="text" placeholder="Enter here" color="warning" key={2} />,
 
];

 export const errorTextFieldArray = [ <TextField
    type="text"
    placeholder="Enter here"
    color="error"
    errorMessage="Username unavailable"
    key={1}
  />,]
