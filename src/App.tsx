import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  // Root app container, applies global font and resets padding/margin
  return (
    <div className="font-body p-0 m-0 min-h-screen bg-neutral">
      {/* Router wraps all routes for SPA navigation */}
      <Router basename="/glasgow-rangers-volleyball-club-frontend/">
        {/* AppRoutes handles all route definitions */}
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
