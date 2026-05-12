import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useAuth } from "../store/authStore";
import { useEffect } from "react";
function RootLayout() {

  const checkAuth = useAuth((state) => state.checkAuth);
  const loading = useAuth((state) => state.loading);

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  if (loading) {
    return <p>Loading app...</p>;
  }

  return (
    <div>
      <Header />
      <div className='min-h-screen mx-32'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout;
