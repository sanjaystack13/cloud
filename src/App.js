import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import Page2 from './Page2';
import Page3 from './Page3';
import SigninForm from './SigninForm';
import Faq from './Faq';
import FinalPage from './FinalPage';


function App() {
  return (
   <>
   <HomePage/>
   <Page2/>
   <Page3/>
   <SigninForm/> 
    <Faq/>
   <FinalPage/>
   </>
  );
}

export default App;
