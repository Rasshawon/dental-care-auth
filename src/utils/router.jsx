import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import Login from "./../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const ServicesRes = await fetch("/service.json");
          const ServicesData = await ServicesRes.json();

          const ReviewsRes = await fetch("/review.json");
          const ReviewsData = await ReviewsRes.json();
          return { ServicesData, ReviewsData };
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-treatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/my-appointment",
        element: (
          <PrivateRoute>
            <MyAppointments></MyAppointments>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          console.log(data, params.id);
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
    ],
  },
]);
export default router;
