import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    position:"absolute",
    top:0,
    zIndex:110,
    width: "100%",
    height: 86,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:20
    
  },
  logo: { width: 100, height: 20, resizeMode:"contain" },
  menu: { height: 25, width: 25, resizeMode:"contain" },
});

export default styles;
