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
// import ChooseSubject from "./screens/ChooseType";
// import StudentWelcome from "./screens/StudentWelcome";
// import StudentChooseLan from "./screens/StudentChooseLan";
// import Mentor from "./screens/MentorWelcome";
// import StudentDashboard from "./screens/StudentDashboard";
// import MentorRegistrationForm from "./screens/MentorSubjectRegForm";
// import LecturerDashboard from "./screens/LecturerDashboard";
// import ViewAllMentors from "./screens/ViewAllMentors";
// import PublicRoutes from "./components/PublicRoutes";
// import ProtectedRoutes from "./components/ProtectedRoutes";
// import Messenger from "./screens/Messenger";
// import AboutPage from "./screens/About";
// import QuizScreen from "./screens/VerificationScreen";
// import Services from "./screens/Services"
export default function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
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
        {/* <Route element={<PublicRoutes />}>
          <Route path="/" element={<SignUpPage />} />
          <Route path="login" element={<Login />} />
        </Route> */}

        {/* <Route element={<ProtectedRoutes />}>
          <Route path="studentChooseLang" element={<StudentChooseLan />} />

          <Route path="chooseSubject" element={<ChooseSubject />} />
          <Route path="mentorWelcome" element={<Mentor />} />
          <Route path="studentWelcome" element={<StudentWelcome />} />
          <Route path="studentWelcome" element={<StudentWelcome />} />
          <Route path="studentDashboard" element={<StudentDashboard />} />
          <Route path="mentotSubjectReg" element={<MentorRegistrationForm />} />
          <Route path="lecturerDashboard" element={<LecturerDashboard />} />
          <Route path="ViewAll" element={<ViewAllMentors />} />
          <Route path="Messenger" element={<Messenger />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="quiz" element={<QuizScreen />} />
          <Route path="services" element={<Services />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
