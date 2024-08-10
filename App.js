
import './App.css';
import About from './Components/About';
import  Login  from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import {Route,Routes} from 'react-router-dom';
import Payment from './Components/Payment';
import BookingPage from './Components/BookingPage';
import PaymentDone from './Components/PaymentDone';
import Events from './Components/Events';
import Event from './Components/Event';
import EventManagement from './Components/EventManagement';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navbar/>} ></Route>
      <Route path="/SignUp" exact element={<SignUp/>} ></Route>
      <Route path='/Login' exact element={<Login/>} ></Route>
      <Route path='/Navbar' exact element={<Navbar/>} ></Route>
      <Route path='/About' exact element={<About/>} ></Route>
      <Route path='/BookingPage' exact element={<BookingPage/>} ></Route>
      <Route path='/Payment' exact element={<Payment/>} ></Route>
      <Route path='/PaymentDone' exact element={<PaymentDone/>} ></Route>
    </Routes>
    // <BookingPage></BookingPage>
    // <Payment></Payment>
  );
}
export default App;