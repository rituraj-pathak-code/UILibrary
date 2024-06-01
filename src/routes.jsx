import Buttons from "./pages/Button";
import Dashboard from "./pages/Dashboard";
import Labels from "./pages/Label";
import Paginations from "./pages/Paginations";
import Chips from './pages/Chips'
import TextFieldPage from "./pages/TextField";
import AccordionScreen from "./pages/AccordionScreen";
import TabsScreen from "./pages/TabsScreen";
import RadioButtons from "./pages/RadioButtons";
import CheckBoxes from "./pages/CheckBoxes";
import PopUpScreen from './pages/PopUpScreen'
import DropdownScreen from "./pages/DropdownScreen";

const RoutesHandler = [
    {
        component: <Dashboard />,
        path: "/",
        isLoading: true,
    },
    {
        component: <Buttons />,
        path: "/buttons",
        isLoading: true,
    },
    {
        component: <Labels />,
        path: "/labels",
        isLoading: true,
    },
    {
        component: <Paginations />,
        path: "/pagination",
        isLoading: true,
    },
    {
        component: <Chips />,
        path: "/chips",
        isLoading: true,
    },
    {
        component: <TextFieldPage />,
        path: "/textfield",
        isLoading: true,
    },
    {
        component: <AccordionScreen />,
        path: "/accordion",
        isLoading: true,
    },
    {
        component: <TabsScreen />,
        path: "/tabs",
        isLoading: true,
    },
    {
        component: <RadioButtons />,
        path: "/radiobuttons",
        isLoading: true,
    },
    {
        component: <CheckBoxes />,
        path: "/checkboxes",
        isLoading: true,
    },
    {
        component: <PopUpScreen />,
        path: "/popup",
        isLoading: true,
    },
    {
        component: <DropdownScreen />,
        path: "/dropdown",
        isLoading: true,
    }
]

export default RoutesHandler