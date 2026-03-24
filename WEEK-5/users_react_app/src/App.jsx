import './App.css';
import UsersList from './components/UsersList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App(){
//state
return(
  <div >
  <Navbar />
  <div className="m-16 min-h-screen">
    <UsersList />
  </div>
  <Footer />
</div>
)
}

export default App;