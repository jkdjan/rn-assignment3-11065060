import { View, Text, StyleSheet, ScrollView } from "react-native";
import Frame1 from "./screens/Frame1";
import SearchBar from "./screens/SearchBar";
import Category from "./screens/Category";
import Task from "./screens/Task";

export default function App() {
  return (
    <>
    <ScrollView>
     <View style={styles.container}>
       <Frame1/> 
       <SearchBar/>
       <Category/>
       <Task/>
     </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    paddingTop: 52, 
    padding: 20, 
    backgroundColor:"#F7F0E8"
  }
});
