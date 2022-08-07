import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./common/foundation/globalStyle";
import ComponentHeader from "./components/header";
import PageDetails from "./pages/details";
import PageHome from "./pages/home";
import PageStats from "./pages/stats";
import PageStatsAlt from "./pages/stats--alt.js";


function App() {
  return (
    <HashRouter>
      <GlobalStyle/>
      <ComponentHeader/>
      <Routes>
        <Route path="/" element={<PageHome/>}/>
        <Route path="/movie/:id" element={<PageDetails/>}/>
        <Route path="/movie/stats" element={<PageStats/>}/>
        <Route path="/movie/stats-alternative" element={<PageStatsAlt/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
