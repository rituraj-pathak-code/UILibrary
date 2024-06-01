import Accordion from "../components/Accordion"

const accordionData = [
    {
        heading: "What is JavaScipt?",
        description: "abc ef jdj  djdjjd djajadjjd dfjafjj dsjjd djsjdf jsdfj sdjfj jsdfj"
    },
    {
        heading: "What is React?",
        description: "abc ef jdj  djdjjd djajadjjd dfjafjj dsjjd djsjdf jsdfj sdjfj jsdfj"
    },
]

export const basicAccordionArray = [
    <Accordion accordionData={accordionData} key={1} />
]
export const expandOneAccordionArray = [
    <Accordion accordionData={accordionData} expandOneAtTime = {true} key={1}/>
]