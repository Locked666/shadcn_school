import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/common/ProtectedRoute";

import LoginCard from "@/page/auth/login";
import Dashboard from "@/page/dashboard";
import Users from "@/page/dashboard/Users";
import Settings from "@/page/settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginCard />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<LoginCard />} />
    </Routes>
  );
}
