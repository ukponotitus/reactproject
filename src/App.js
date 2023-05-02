import './App.css';
import Navbar from './newproject/navbar2';
import './newproject/house.css'
import  Section1 from './newproject/body';
import Section2 from './newproject/Secondb';
function App() {
  const title = 'Welcome to react blog'
  const link = "http://www.gooogle.com"
  return (
    <>
<Navbar />  
<Section1 /> 
<Section2 /> 
</>   
  );
}
export default App;
