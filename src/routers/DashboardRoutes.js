import { Navbar } from "../componentes/ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from "../componentes/dc/DcScreen";
import { MarvelScreen } from "../componentes/marvel/MarvelScreen";
import { SearchScreen } from "../componentes/search/SearchScreen";
import { HeroScreen } from "../componentes/hero/HeroScreen";
export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />

        </Routes>
    </div>
    </>
  )
}
