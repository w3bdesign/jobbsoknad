import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Nav, Header, Footer} from "./components/theme"
import {ContentContainer} from "@navikt/ds-react";
import {ScrollToTop} from "./components/theme/index"
import Home from "./Home";
import Privacy from './Privacy';
import Accessibility from "./Accessibility";

const routes = [
    { path: "/tilgjengelighet", component: <Accessibility /> },
    { path: "/personvern", component: <Privacy /> },
    { path: "*", component: <Home /> },
];

export default function App() {
    return (
        <div>
            <Nav/>
            <main style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <ContentContainer>
                    <Header/>
                    <Router>
                        <Routes>
                            {routes.map(({ path, component }) => (
                                <Route key={path} path={path} element={component} />
                            ))}
                        </Routes>
                    </Router>
                </ContentContainer>
                <ScrollToTop/>
            </main>
            <Footer/>
        </div>
    )
}