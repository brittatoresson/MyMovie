import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Pages/Search";
import History from "./Pages/History";
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
          <Route path="/history" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
