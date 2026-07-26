import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { PageLoader } from "./components/layout/PageLoader";
import { SmoothScrollProvider } from "./components/layout/SmoothScrollProvider";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <PageLoader onComplete={handleReady} />}
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SmoothScrollProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="work" element={<WorkPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:slug" element={<ProjectDetailPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </SmoothScrollProvider>
        </motion.div>
      )}
    </>
  );
}

export default App;
