import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const categories = [
    { key: 1, name: "Exercise" },
    { key: 2, name: "Study" },
    { key: 3, name: "Game" },
    { key: 4, name: "Movies" },
    { key: 5, name: "Cook" },
    { key: 6, name: "Beach Day" },
    { key: 7, name: "Run" },
    { key: 8, name: "Travel" }
];

const renderCategories = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.bigText}>{item.name}</Text>
            <Text>12 Tasks</Text>
            <View style={styles.img}>
                <Image source={require("../assets/Vr.jpg")} style={styles.imgStyle} resizeMode="contain" />
            </View>
        </View>
    );
};

export default function CategorySection() {
    return (
        <View style={styles.container}>
            <Text style={styles.category}>Categories</Text>
            <FlatList
                contentContainerStyle={styles.hList}
                data={categories}
                renderItem={renderCategories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.key.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    category: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        borderRadius: 20,
        marginTop: -5,
        width: "77%",
    },
    hList: {
        paddingVertical: 10,
    },
    itemContainer: {
        backgroundColor: "white",
        marginRight: 20,
        width: 190,
        height: 190,
        borderRadius: 20,
        padding: 20,
    },
    bigText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    img: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imgStyle: {
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
});
