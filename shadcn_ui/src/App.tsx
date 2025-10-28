import { ThemeProvider } from "@/components/theme-provider"

import { LoginCard } from "./page/auth/login"


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen flex items-center justify-center">
          <LoginCard/>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App