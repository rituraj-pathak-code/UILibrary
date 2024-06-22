import Button from "../components/Button";

import { MdOutlineDelete } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

export const basicButtonsArray = [
    <Button
      key={1}
    >
      Default
    </Button>,
    <Button
      category="primary"
      key={2}
    >
      Primary
    </Button>,
       <Button
       category="secondary"
       key={3}
     >
       Secondary
     </Button>,
     <Button
     category="disabled"
     key={3}
   >
     Disabled
   </Button>,
  ];

  export const outlinedButtonsArray =[
    <Button
      category="primary"
      key={1}
      outlined
    >
      Primary
    </Button>,
       <Button
       category="secondary"
       key={2}
       outlined
     >
       Secondary
     </Button>,
      <Button
      category="warning"
      key={2}
      outlined
    >
      Warning
    </Button>,
     <Button
     category="error"
     key={3}
     outlined
   >
     Error
   </Button>,
  ];
  
  export  const coloredButtonsArray = [
    <Button
      key={1}
    >
      Default
    </Button>,
    <Button
      category="primary"
      key={2}
    >
      Primary
    </Button>,
    <Button
      category="secondary"
      key={3}
    >
      Secondary
    </Button>,
    <Button
      category="info"
      key={4}
    >
      Info
    </Button>,
     <Button
     category="success"
     key={5}
   >
     Success
   </Button>,
    <Button
    category="warning"
    key={6}
  >
    Warning
  </Button>,
   <Button
   category="error"
   key={7}
 >
   Error
 </Button>,
  ];
  
  export const iconButtonsArray = [<Button
    category="error"
    startIcon={<MdOutlineDelete size={19}/>}
    key={1}
  >
    Delete
  </Button>,
  <Button
    category="primary"
    endIcon={<IoMdSend size={16}/>}
    key={2}
  >
    Send
  </Button>
  ]

  export const sizeButtonsArray = [
    <Button
    category="primary"
    size="large"
    key={1}
  >
    Large
  </Button>,
  <Button
  category="primary"
  size="normal"
  key={1}
>
  Normal
</Button>,
  <Button
  category="primary"
  size="small"
  key={1}
>
  Small
</Button>,
  ]