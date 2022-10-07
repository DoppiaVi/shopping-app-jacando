import "./App.css";
import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.key}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
