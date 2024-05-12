import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
