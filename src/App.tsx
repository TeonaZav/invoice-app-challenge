import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayOut from "./components/UI/AppLayout";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/invoice/:id" element={<Invoice />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
