import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginHorizontal: SIZES.small,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    paddingHorizontal: SIZES.small,
    fontFamily: "regular",
    width: "100%",
    height: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  serachImage: {
    resizeMode: "contain",
    width: SIZES.width - 50,
    height: SIZES.height - 300,
    opacity: 0.9,
  },
});

export default styles;
