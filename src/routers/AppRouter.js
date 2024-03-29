import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../componentes/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="/*"  element={
        <PrivateRoute>
          <DashboardRoutes />
        </PrivateRoute>} />
        {/* <Route path="/*" element={<DashboardRoutes />}/> */}
      </Routes>
    </BrowserRouter>
  )
}
