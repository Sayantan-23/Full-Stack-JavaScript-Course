import { Box } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper } from "swiper/react";

const AutoSwiper = ({ children }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: {
            xs: "50%",
            sm: "35%",
            md: "25%",
            lg: "20.5%",
          },
        },
        "& .swiper-slide-active": { opacity: 1 },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "text.primary",
          "&::after": {
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
      }}
    >
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
