import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from "./components/layout/MasterLayout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* idea: use * to make difference implicit and explicit route like exact */}

        <Route path="/" element={<MasterLayout />}>
          {/* section: public Routes */}

          <Route path="/" element={<Home />} />

          {/* section: private Routes */}

          {/* section: unauthorized Routes */}

          {/* section: missing Routes */}

          <Route
            path="*"
            element={
              <dialog open>
                <p>There's nothing here!</p>
              </dialog>
            }
          />
        </Route>

        {/* <Route path="/admin" element={<AdminLayout />}>
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

// write a function that will display a toast message
// toast.success("Success message", {
//   position: toast.POSITION.TOP_CENTER,
//   autoClose: 5000,
// }
// )
