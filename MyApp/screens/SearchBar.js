import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
            <Image source={require("../assets/Vector.png")}/>
            <TextInput style={styles.inputStyles} placeholder="Search" placeholderTextColor={"black"}/>
        </View>
        <TouchableOpacity style={styles.imgButtonStyles}>
            <Image source={require("../assets/bx_slider.png")}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical:25,
        gap:20
   },
   inputContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding:10,
        gap:20,
        width:"77%"
    },
    imgButtonStyles: {
        backgroundColor: "red",
        padding:6,
        borderRadius:10
    },
    inputStyles: {
        outline:undefined,
        border:undefined
    },
});











