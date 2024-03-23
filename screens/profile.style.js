import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  upperRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    marginTop: 30,
    marginHorizontal: 12,
  },
  profileText: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginLeft: 12,
  },
  profileRow: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  userimage: {
    marginRight: 25,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  username: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  email: {
    fontFamily: "regular",
  },
});

export default styles;
