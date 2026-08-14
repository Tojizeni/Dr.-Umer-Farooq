import { Routes, Route } from "react-router-dom";
import PatientLayout from "./components/layout/PatientLayout";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import ScrollToTop from "./components/layout/ScrollToTop";

// Patient Pages
import Home from "./pages/patient/Home";
import About from "./pages/patient/About";
import Treatments from "./pages/patient/Treatments";
import TreatmentDetail from "./pages/patient/TreatmentDetail";
import Consultation from "./pages/patient/Consultation";
import Reviews from "./pages/patient/Reviews";
import Blog from "./pages/patient/Blog";
import BlogDetail from "./pages/patient/BlogDetail";
import Contact from "./pages/patient/Contact";
import Appointment from "./pages/patient/Appointment";

// Admin Pages
import Login from "./pages/admin/Login";
import Overview from "./pages/admin/Overview";
import Appointments from "./pages/admin/Appointments";
import Patients from "./pages/admin/Patients";
import Messages from "./pages/admin/Messages";
import ManageTreatments from "./pages/admin/ManageTreatments";
import AddTreatment from "./pages/admin/AddTreatment"; // <-- Naya Import
import ManageBlog from "./pages/admin/ManageBlog";
import AddBlog from "./pages/admin/AddBlog"; // <-- Naya Import
import ManageReviews from "./pages/admin/ManageReviews";
import Settings from "./pages/admin/Settings";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Patient Routes */}
        <Route element={<PatientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Overview />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="messages" element={<Messages />} />
          <Route path="treatments" element={<ManageTreatments />} />
          <Route path="treatments/new" element={<AddTreatment />} /> {/* <-- Naya Route */}
          <Route path="blog" element={<ManageBlog />} />
          <Route path="blog/new" element={<AddBlog />} /> {/* <-- Naya Route */}
          <Route path="reviews" element={<ManageReviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}