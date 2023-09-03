import Header from "./components/Header";
import ImageInput from "./components/ImageInput";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ImageInput />} />
      </Routes>
    </>
  );
}

export default App;
