import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import NavSidebar from "./components/NavSidebar/NavSidebar";
import Form from "./pages/SIGNUP/Form";
import Appointment from "./pages/Appointment/Appointment";
import { Navbar } from "./components/Header/Navbar";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DeactivateAccount } from "./components/Profile/deactivateAccount/DeactivateAccount";
import { ToastContainer, toast } from "react-toastify";
import Announcement from "./pages/AnnouncementPage/Announcement";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./components/Announcement/Offers";
import Settings from "./pages/SettingsPage/Settings";
import { NavbarTry } from "./components/Header/NavbarTry";
import LoginForm from "./pages/SIGNIN/LoginForm";
import { Header } from "./components/Header/Header";
import { Header1 } from "./components/Header/Header1";
// import SidebarForMobile from "./components/Sidebar/SidebarForMobile";
import { Header2 } from "./components/Header/Header2";
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import AppointmentTime from "./pages/AppointmentTime";


function App() {
  // const user = localStorage.getItem("user");
  const user = useSelector((state) => state.auth.user);

  // console.log(user);
  const location = useLocation();

  const isLoginPageOrSignup =
    location.pathname === "/" || location.pathname === "/signup";
  return (
    <div className="App">
      <ToastContainer style={{ width: "330px" }} />
      {/* {!isLoginPageOrSignup && ( */}
      {user && (
        <>
          {/* <NavbarTry /> */}
          {/* <Navbar/> */}
          {/* <Header/> */}
          {/* <SidebarForMobile /> */}
          {/* <Header1/> */}
          <Header2 /> 
          
          <div className="opacity-100" style={{ display: "flex" }}>
            {/* <div>
              <Sidebar />
            </div> */}
            <div>
              <NavSidebar/>
            </div>

            <div className="w-[100%] ">
              <Routes>
                <Route exact path="/" element={<DashboardPage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="profile" element={<ProfilePage />} />

                <Route
                  exact
                  path="profile/deactivateAccount"
                  element={<DeactivateAccount />}
                />
                <Route exact path="announcement" element={<Announcement />} />
                <Route exact path="settings" element={<Settings />} />
                <Route exact path="profile" element={<ProfilePage />} />
                <Route exact path="/appointment" element={<Appointment />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      {!user && (
        <div>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/signup" element={<Form />} />
            <Route path="/userhome" element={<Home/>} />
        {/* <Route path="/userappointment" element={<AppointmentTime />} /> */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </div>
      )}
      {/* <Routes>
      <Route path="/userhome" element={<Home/>} />
        <Route path="/userappointment" element={<AppointmentTime />} />
      </Routes> */}
    </div>
  );
}

export default App;
