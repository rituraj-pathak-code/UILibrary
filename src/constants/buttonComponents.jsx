import Button from "../components/Button";
import trashIcon from '/assets/trash_icon.png'
import sendIcon from '/assets/send_icon.png'

export const basicButtonsArray = [
    <Button
      category="primary"
      borderRadius="normal"
      size="normal"
      key={1}
    >
      Primary
    </Button>,
    <Button
      category="secondary"
      borderRadius="normal"
      size="normal"
      key={2}
    >
      Secondary
    </Button>,
  ];
  
  export  const coloredButtonsArray = [
    <Button
      category="success"
      borderRadius="normal"
      size="normal"
      key={1}
    >
      Warning
    </Button>,
    <Button
      category="danger"
      borderRadius="normal"
      size="normal"
      key={2}
    >
      Danger
    </Button>,
    <Button
      category="warning"
      borderRadius="normal"
      size="normal"
      key={3}
    >
      Warning
    </Button>,
    <Button
      category="disabled"
      borderRadius="normal"
      size="normal"
      key={4}
    >
      Disabled
    </Button>,
  ];
  
  export const iconButtonsArray = [<Button
    category="danger"
    startIcon={trashIcon}
    borderRadius="normal"
    size="normal"
    key={1}
  >
    Delete
  </Button>,
  <Button
    category="primary"
    endIcon={sendIcon}
    borderRadius="normal"
    size="normal"
    key={2}
  >
    Send
  </Button>
  ]

  export const sizeButtonsArray = [
    <Button
    category="primary"
    borderRadius="normal"
    size="large"
    key={1}
  >
    Large
  </Button>,
  <Button
  category="primary"
  borderRadius="normal"
  size="normal"
  key={1}
>
  Normal
</Button>,
  <Button
  category="primary"
  borderRadius="normal"
  size="small"
  key={1}
>
  Small
</Button>,
  ]