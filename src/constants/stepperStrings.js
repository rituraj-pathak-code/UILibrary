export const simpleStepper = `const STEPS = [
    {
        name: "Customer Info",
        Component: () => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Customer Info Tab</div>
    },
    {
        name: "Shipping Info",
        Component:() => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Shipping Info Tab</div>
    },
    {
        name: "Payment Info",
        Component: () => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Payment Info Tab</div>
    },
    {
        name: "Delivered",
        Component:() => <div style={{paddingBlock:'2em', textAlign:'center'}}>On Delivered Tab</div>
    },
]
<Stepper steps={STEPS}/>`