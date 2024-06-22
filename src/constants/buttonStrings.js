
export const primaryButton = '<Button type = "primary" borderRadius = "normal" size="normal">Submit</Button>\n'
export const secondaryButton = '<Button type="secondary" borderRadius="normal" size="normal">Submit</Button>\n'
export const successButton = '<Button type = "success" borderRadius = "normal" size="normal">Submit</Button>\n'
export const dangerButton = '<Button type = "danger" borderRadius = "normal" size="normal">Submit</Button>\n'
export const warningButton = '<Button type = "danger" borderRadius = "normal" size="normal">Submit</Button>\n'
export const disabledButton = '<Button type = "disabled" borderRadius = "normal" size="normal">Submit</Button>\n'
export const buttonWithStartIcon = '<Button type="danger" startIcon={trashIcon} borderRadius="normal" size="normal">Delete</Button>\n'
export const buttonWithEndIcon = '<Button type="primary" endIcon={sendIcon} borderRadius="normal" size="normal">Submit</Button>\n'

export const basicButtons = `<Button>Default</Button>
<Button category='primary'>Primary</Button>
<Button category='secondary'>Secondary</Button>
<Button category='disabled'>Disabled</Button>`

export const outlinedButtons = `<Button category='primary' outlined>Primary</Button>
<Button category='secondary' outlined>Secondary</Button>
<Button category='warning' outlined>Warning</Button>
<Button category='error' outlined>Error</Button>`

export const coloredButtons = `<Button>Default</Button>
<Button category='primary'>Primary</Button>
<Button category='secondary'>Secondary</Button>
<Button category='info'>Info</Button>
<Button category='success'>Success</Button>
<Button category='warning'>Warning</Button>
<Button category='error'>Error</Button>`

export const sizedButtons = `<Button category="primary" size='large'>Large</Button>
<Button category='primary' size='normal'>Normal</Button>
<Button category='secondary' size='small'>Small</Button>`

export const iconButtons = `import { MdOutlineDelete } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

<Button category="error" startIcon={<MdOutlineDelete size={19}/>}>Delete</Button>
<Button category='primary' endIcon={<IoMdSend size={16}/>}>Send</Button>`

