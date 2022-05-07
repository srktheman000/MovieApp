import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import TopRatedPage from "./Component/Topratedpage/TopRatedPage";
import UpcomingMoviePage from "./Component/UpcomingMoviePage.js/UpcomingMoviePage";
import Detailpage from "./Component/DetailPage/Detailpage";
import Search from "./Component/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/TopRatedPage" exact element={<TopRatedPage />} />
        <Route
          path="/UpcomingMoviePage"
          exact
          element={<UpcomingMoviePage />}
        />
        <Route path="/detailpage/:itemid" element={<Detailpage />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
