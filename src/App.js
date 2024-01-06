import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BusSeatSelection from './components/BusSeatSelection';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BusSeatSelection />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

function App() {
  return (
    <div className="App">

      <div className="select-route">
        <a href={`/`}>
          <button>Seat selection</button>
        </a>
        <a href={`/dashboard`}>
          <button>Dashboard</button>
        </a>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
