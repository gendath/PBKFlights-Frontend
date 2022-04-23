import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Menu from "./Menu";
import FlightsView from "./FlightsView";

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/flights" component={FlightsView} />
            <Route exact path="/flights/:id" component={App} />
            <Route exact path="/Order/:id" component={App} />
            <Route exact path="/admin" component={App} />
            <Route exact path="/login" component={App} />
            <Route exact path="/register" component={App} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router