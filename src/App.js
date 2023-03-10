import Layout from "./Layout/Layout";
import 'remixicon/fonts/remixicon.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>  
    <ToastContainer/>    
      <Layout />
    </div>
  );
}

export default App;
