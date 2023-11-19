import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";

import CreateTask from "./Pages/CreateTask";
import CounterPage from "./Pages/CounterPage";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Third from "./Pages/Third";
import FourthPage from "./Pages/FourthPage";

function App() {
  const test = "this is testing";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<CreateTask />} />
          <Route path="/count" element={<CounterPage />} />
          <Route path="/first" element={<First />} />

          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<FourthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
