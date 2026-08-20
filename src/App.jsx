import FeaturedProjects from "./components/FeaturedProjects";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;