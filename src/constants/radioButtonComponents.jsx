import RadioButton from "../components/RadioButton";
import RadioGroup from "../components/RadioGroup";

export const basicRadioButtonArray = [
    <RadioGroup groupName={"tech"}  key={1}>
        <RadioButton label={"React"} value={"react"} />
        <RadioButton label={"Angular"} value={"react"} />
        <RadioButton label={"Vue"} value={"react"} />
        <RadioButton label={"Svelte"} value={"react"} />
  </RadioGroup>
]
export const coloredRadioButtonArray = [
    <RadioGroup groupName={"tech"} key={1}>
            <RadioButton label={"React"} value={"react"} category="primary" />
            <RadioButton label={"Angular"} value={"react"} category="error" />
            <RadioButton label={"Vue"} value={"react"} category="success" />
            <RadioButton label={"Svelte"} value={"react"} category="disabled" />
     </RadioGroup>
]

export const largeRadioButtonArray = [
    <RadioGroup groupName={"tech"} size='large' key={1}>
            <RadioButton label={"React"} value={"react"} size='large'/>
            <RadioButton label={"Angular"} value={"react"} size='large'/>
            <RadioButton label={"Vue"} value={"react"} size='large'/>
            <RadioButton label={"Svelte"} value={"react"} size='large'/>
    </RadioGroup>
]
export const smallRadioButtonArray = [
    <RadioGroup groupName={"tech"} size='small' key={1}>
    <RadioButton label={"React"} value={"react"} size='small'/>
    <RadioButton label={"Angular"} value={"react"} size='small'/>
    <RadioButton label={"Vue"} value={"react"} size='small'/>
    <RadioButton label={"Svelte"} value={"react"} size='small'/>
  </RadioGroup>
]