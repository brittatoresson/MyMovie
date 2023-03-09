import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import LandingPage from "./Pages/LandingPage";
import Movies from "./Pages/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
