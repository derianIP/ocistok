import { Home } from "pages";
import "assets/scss/style.scss";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    loadJquery();
    loadJs();
  }, []);

  const loadJs = () => {
    const script = document.createElement("script");
    script.src = "/bootstrap.bundle.min.js";
    script.async = false;
    document.body.appendChild(script);
  };

  const loadJquery = () => {
    const script = document.createElement("script");
    script.src = "/jquery-3.6.0.min.js";
    script.async = false;
    document.body.appendChild(script);
  };
  return <Home />;
}

export default App;
