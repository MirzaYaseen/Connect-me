import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./screens/Signup";
import Login from "./screens/Login";
import Services from "./screens/Services";
import AppHeader from "../src/components/AppHeader";
import Electricians from "./screens/Electricians";
import AirConditioners from "./screens/AirConditioners";
import CarPenters from "./screens/CarPenters";
import Painters from "./screens/Painters";
import ExpertsDashboard from "./screens/ExpertsDashboard";
import SelectRole from "./screens/SelectRole";
import ExpertVerification from "./screens/ExpertVerification";
import PaymentForm from "./screens/Payment";
import AboutPage from "./screens/About";
import ChooseCategory from "./screens/ChooseCategory";
import CongratulationSeller from "./screens/CongratulationSeller";
import ElectricianServices from "./screens/ElectricianServices";
import PainterServices from "./screens/PainterServices";
import CarpenterServices from "./screens/CarpenterServices";
import AirconditionerServices from "./screens/AirConditionerServices";
import ContactUs from "./screens/ContactUs";
import MakeAppointment from "./screens/MakeAppointment";
import RegisterServiceProvider from "./screens/RegisterServiceProvider";
import ViewAllServices from "./screens/ViewAllServices";
import Reviews from "./screens/Reviews";
import ServiceProviderReviews from './screens/ServiceProviderReviews';
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Messenger from "./screens/Messenger";

export default function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<SignUpPage />} />
        <Route path="login" element={<Login />} />
      </Route>

        <Route element={<ProtectedRoutes />}>
        <Route path="/services" element={<Services />} />
        <Route path="/electricians" element={<Electricians />} />
        <Route path="/carpenters" element={<CarPenters />} />
        <Route path="/painters" element={<Painters />} />
        <Route path="/airconditioners" element={<AirConditioners />} />
        <Route path="/selectRole" element={<SelectRole />} />
        <Route path="/expertsDashboard" element={<ExpertsDashboard />} />
        <Route path="/expertsVerification" element={<ExpertVerification />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/categoryChoose" element={<ChooseCategory />} />
        <Route path="/congratsSeller" element={<CongratulationSeller />} />
        <Route path="/electricianServices" element={<ElectricianServices />} />
        <Route path="/painterServices" element={<PainterServices />} />
        <Route path="/carpenterServices" element={<CarpenterServices />} />
        <Route path="/airConditionerServices" element={<AirconditionerServices />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/makeAppointment" element={<MakeAppointment />} />
        <Route path="/registerServiceProvider" element={<RegisterServiceProvider />} />
        <Route path="/viewAllServices" element={<ViewAllServices />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="/serviceProviderReviews" element={<ServiceProviderReviews />} />
        <Route path="/Messenger" element={<Messenger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
