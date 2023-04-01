import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Footer from "../common/Footer"
import GlobalLoading from "../common/GlobalLoading"
import TopBar from "../common/Topbar"
import AuthModal from "../common/AuthModal"

const MainLayout = () => {
  return (
    <>
      {/* Global Loading */}
      <GlobalLoading />

      {/* Login Modal */}
      <AuthModal />
      
      <Box display="flex" minHeight="100vh">
        {/* Header */}
        <TopBar />
        
        {/* Main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh" >
          <Outlet />
        </Box>

      </Box>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default MainLayout