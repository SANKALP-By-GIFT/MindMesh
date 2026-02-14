import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import Login from "./pages/Login";
import DashboardHome from "./pages/Dashboard";
import MembersPage from "./pages/MembersPage";
import ExpensesPage from "./pages/ExpensesPage";
import CreateGroup from "./pages/CreateGroup";



function App() {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardHome />
                </ProtectedRoute>
              }
            />

            <Route
              path="/members"
              element={
                <ProtectedRoute>
                  <MembersPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/expenses"
              element={
                <ProtectedRoute>
                  <ExpensesPage />
                </ProtectedRoute>
              }
            />
            <Route
  path="/create-group"
  element={
    <ProtectedRoute>
      <CreateGroup />
    </ProtectedRoute>
  }
/>



            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </AuthProvider>
  );
}

export default App;
