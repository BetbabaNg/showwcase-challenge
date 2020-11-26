import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Main from "./pages/MainPage/Main";
import notFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route path="/Main/:name/:education" component={Main}></Route>
        <Route path="/Main/:name" component={Main}></Route>
        <Route path="/not-found" component={notFound}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

export default App;
