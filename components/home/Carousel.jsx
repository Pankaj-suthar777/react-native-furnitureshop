import React from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=2048x2048&w=is&k=20&c=3DNM6MEVHjVYylIG3nigNKX1NMiBdZRN3PxfThhwIXc=",
    "https://media.istockphoto.com/id/1009877634/photo/happy-kids-happy-family.jpg?s=2048x2048&w=is&k=20&c=znRuIspjo9n11MhlfbJYmYJFCRoj_vudJYTFI7sGWfU=",
    "https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=2048x2048&w=is&k=20&c=u95oK-AfnflG_CXLYy4mf9owTsBFk86sBhiYKMZvulI=",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.secondary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 15,
        }}
        autoplay
        circleLogo
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
