import Main from "./Main";
import Navbar from "./Navbar";
import Crud from "./Crud_operation/Crud";
import Other from "./Crud_operation/Other";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Main />} />
          
          <Route path='/Crud' element={<Crud />} />
          <Route path='/Other' element={<Other />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
