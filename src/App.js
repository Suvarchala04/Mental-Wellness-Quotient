import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Accredited from './Components/Accredited';
import Header from './Components/Header';
import Accredited2 from './Components/Accredited2';
import Admin from './Components/Admin';
import Admin2 from './Components/Admin2';
import HappinessInstitute from './Components/HappinessInstitute';
import SignupHeader from './Components/SignupHeader';
import Forgot from './Components/Forgot';
import Institute from './Components/Institute';
import ResetPassword from './Components/ResetPassword';
import ParentDashboard from './Components/ParentDashboard';
import Parent from './Components/Parent';
import Result from './Components/Result';
import Role from './Components/Role';
import StudentDashboard from './Components/StudentDashboard';
import Student from './Components/Student';
import TeacherDashboard from './Components/TeacherDashboard';
import Teacher from './Components/Teacher';
import Top10District from './Components/Top10District';
import Top10State from './Components/Top10State';
import Top10India from './Components/Top10India';
import ParentsQuotient from './Components/ParentsQuotient';
import StudentQuotient from './Components/StudentQuotient';
import TeacherQuotient from './Components/TeacherQuotient';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={[<SignupHeader /> , <Signup />]} />
        <Route path="/Forgot" element={[<Header />,<Forgot />]}/>
        <Route path="/ResetPassword" element={[<SignupHeader /> , <ResetPassword />]} />
        <Route path="/Role" element={[<Header />,<Role />]}/>
        <Route path="/Accredited" element={[<Header />,<Accredited />]}/>
        <Route path="/Accredited2" element={[<Header />,<Accredited2 />]}/>
        <Route path="/Admin" element={[<Header />,<Admin />]}/>
        <Route path="/Admin2" element={[<Header />,<Admin2 />]}/>
        <Route path="/HappinessInstitute" element={[<Header />,<HappinessInstitute />]}/>
        <Route path="/ParentsQuotient" element={[<Header />,<ParentsQuotient />]}/>
        <Route path="/StudentQuotient" element={[<Header />,<StudentQuotient />]}/>
        <Route path="/TeacherQuotient" element={[<Header />,<TeacherQuotient />]}/>
        <Route path="/Institute" element={[<Header />,<Institute />]}/>
        <Route path="/ParentDashboard" element={[<Header />,<ParentDashboard />]}/>
        <Route path="/Parent" element={[<Header />,<Parent />]}/>
        <Route path="/Result" element={[<Header />,<Result />]}/>
        <Route path="/StudentDashboard" element={[<Header />,<StudentDashboard />]}/>
        <Route path="/Student" element={[<Header />,<Student />]}/>
        <Route path="/TeacherDashboard" element={[<Header />,<TeacherDashboard />]}/>
        <Route path="/Teacher" element={[<Header />,<Teacher />]}/>
        <Route path="/Top10District" element={[<Header />,<Top10District />]}/>
        <Route path="/Top10State" element={[<Header />,<Top10State />]}/>
        <Route path="/Top10India" element={[<Header />,<Top10India/>]}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;