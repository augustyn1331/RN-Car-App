import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      alignItems: "center",
    },
    title:{
      fontWeight: "500",
      fontSize: 40,
      marginTop:"30%",
    },
    subTitle:{
      fontSize: 16,
      fontWeight: "400",
      color: "#5c5e62"
    },
    image:{
      position:"absolute",
      height: '100%',
      width: '100%',
      resizeMode:"cover",
    },
    buttonContainer:{
      position:"absolute",
      width: '100%',
      bottom:50,

    }
  });
  
  export default styles;