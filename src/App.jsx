import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={7}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={7} country="us" category="health" />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={7}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={7} country="gb" category="sports" />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={7}
                country="us"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={7}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
