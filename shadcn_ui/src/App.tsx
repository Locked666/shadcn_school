import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AppRoutes from "@/routes/AppRoutes";
import { ThemeProvider } from "./components/utils/theme-provider";

// function App() {
//   return (
//     <>
//       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//         <div className="h-screen flex items-center justify-center">
//           <SidebarProvider>
//             <AppSidebar></AppSidebar>
//             <LoginCard />
//           </SidebarProvider>
//         </div>
//       </ThemeProvider>
//     </>
//   );
// }

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
