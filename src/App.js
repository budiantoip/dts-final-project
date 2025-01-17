// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ProfilePage from "./containers/ProfilePage";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Header from './components/Header/Header';
import Footer from './components/Footer';
// import { dispatchUsers, fetchFoodData, fetchUserCartData, isAdmin } from "./utils/functions";
import { fetchFoodData } from "./utils/functions";
import { useEffect } from "react";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ showCart, user, foodItems, cartItems, adminMode }, dispatch] =
    useStateValue();

  useEffect(() => {
    fetchFoodData(dispatch);
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className='w-screen h-auto min-h-[100vh] flex flex-col bg-primary'>
        <Header />
        <main
          className={`'mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4'} w-full h-auto`}
          onClick={() => {}}
        >
          <Routes>
            <Route path='/*' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
