import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./layout/Main/Main";
import Login from "./Pages/features/Authentication/Login";
import Onbaording from "./Pages/layout/Landing/Onboarding";
import Registration from "./Pages/features/Authentication/Registration";
import { Homepage, NotFound } from "./Pages/layout/Landing";
import Dashboard from "./Pages/Dashboard";
import Chat from "./Pages/Chat";
import Inventory from "./Pages/Inventory";
import { Store } from "./Pages/features/Product/ProductView";
import Calendar from "./Pages/Calendar";

const RoutesManager = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route element={<Onbaording />}>
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<Main />}>
        <Route path='/home' element={<NotFound />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/messages' element={<Chat />} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/store' element={<Inventory />}>
          <Route path='inventory' element={<Store />} />
          <Route path='add-product' element={<Store />} />
          <Route path='settings' element={<Store />} />
          <Route exact path='' element={<Navigate to={"inventory"}></Navigate>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesManager;
