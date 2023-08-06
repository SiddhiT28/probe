import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Rout } from "./components/Routes";
import { Footer } from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? " dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Rout />
        <Footer />
      </div>
    </div>
  );
};

export default App;
