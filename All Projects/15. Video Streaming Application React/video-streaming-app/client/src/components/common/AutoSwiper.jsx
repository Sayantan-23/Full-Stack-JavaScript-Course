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
      }}
    >
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        cssMode={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
