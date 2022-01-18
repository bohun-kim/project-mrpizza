import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import SimplePizza from "./components/Menu/SimplePizza/SimplePizza";
import Salad from "./components/Menu/Salad/Salad";
import Pizza from "./components/Menu/Pizza/Pizza";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/menu"} component={Menu} />
          <Route exact path={"/menu/pizza"} component={Pizza} />
          <Route exact path={"/menu/simplePizza"} component={SimplePizza} />
          <Route exact path={"/menu/salad"} component={Salad} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
