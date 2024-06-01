import React ,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Container';
import RoutesHandler from './routes';


const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                {RoutesHandler.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<Container>{item.component}</Container>} />
                ))}
            </Routes>
        </Router>
    )
}

export default RouterComponent