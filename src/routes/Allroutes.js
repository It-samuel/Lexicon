import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const AllRoutes = () => {    
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/Products/:id" element={<ProductDetail />} />

            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
            <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
            <Route path="dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        </Routes>
    )
}