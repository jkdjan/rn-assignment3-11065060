import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.frameContainer}>
        <View>
            <Text style={styles.bigText}>Hello , Devs</Text>
            <Text>14 tasks today</Text>
        </View>
        <View style={styles.imgStyles}>
            <Image source={require("../assets/person.png")}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    frameContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection:'row',
        width: '100%',
        borderColor:'black',
    },
    bigText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgStyles:{
        backgroundColor:'white',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});