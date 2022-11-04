import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact.component";
import MainSection from "./components/MainSection.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSection/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   
  );
}

export default App;
