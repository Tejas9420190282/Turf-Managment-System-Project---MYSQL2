
// App.jsx

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Add_Turf from "./components/Admin/Add_Turf";
import Turf_Result from "./components/Admin/Turf_Result";
import ViewAllTurfList from "./components/Admin/View_All_Turf_List";
import FindTurfByArea from "./components/Admin/Find_Turf_Using_Area";
import Final_Turf_Update from "./components/Admin/Final_Turf_Update";
import Remove_Turf from "./components/Admin/Remove_Turf";
import User_Dashboard from "./components/User/User_Dashboard";
import Search_Available_Turf from "./components/User/Search_Available_Turf";
import Selected_Slote from "./components/User/Selected_Slote";
import Success_Booking from "./components/User/Success_Booking";
import View_Player_Data from "./components/User/View_Player_Data";
import ProtectedRoute from "./components/Protected Route/Protected_Route";
import useAuth from "./components/Protected Route/useAuth";
import ForgotPassword from "./components/Forget_Password";
import ResetPassword from "./components/Reset_Password";
import View_Booking from "./components/Admin/View_Booking";

function App() {
    const isAuthenticated = useAuth(); // Check if the user is authenticated

    const router = createBrowserRouter([
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword />,
        },
        {
            path: "/reset-password/:token",
            element: <ResetPassword />,
        },

        {
            element: <ProtectedRoute isAuthenticated={isAuthenticated} />, // Wrap protected routes
            children: [
                // Admin Section
                {
                    path: "/admin",
                    element: <AdminDashboard />,
                },
                {
                    path: "/admin/add-turn",
                    element: <Add_Turf />,
                },
                {
                    path: "/admin/add-turn/add-turf-submit/turf-result",
                    element: <Turf_Result />,
                },
                {
                    path: "/admin/view-all-turf",
                    element: <ViewAllTurfList />,
                },
                {
                    path: "/admin/search-area-turf/:area",
                    element: <FindTurfByArea />,
                },
                {
                    path: "/admin/search-area-turf/:area/final-update-turf",
                    element: <Final_Turf_Update />,
                },
                {
                    path: "/admin/remove-turf",
                    element: <Remove_Turf />,
                },
                {
                    path: "/admin/view-booking-using-turf-id",
                    element: <View_Booking />,
                },

                // User Section
                {
                    path: "/user",
                    element: <User_Dashboard />,
                },
                {
                    path: "/user/search-available-turf",
                    element: <Search_Available_Turf />,
                },
                {
                    path: "/user/search-available-turf/selected-available-slote/:sloteid/turfid/:turfid",
                    element: <Selected_Slote />,
                },
                {
                    path: "/success-booking",
                    element: <Success_Booking />,
                },
                {
                    path: "/user/view-booking",
                    element: <View_Player_Data />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;


