import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  { key: 1, name: 'Mobile App Development' },
  { key: 2, name: 'Web Development' },
  { key: 3, name: 'Pushups' },
  { key: 4, name: 'Gym' },
  { key: 5, name: 'Take a shower' },
  { key: 6, name: 'Eat' },
  { key: 7, name: 'Take a nap' },
  { key: 8, name: 'Laundry' },
  { key: 9, name: 'Freshen Up' },
  { key: 10, name: 'Therapy' },
  { key: 11, name: 'Check Mail' },
  { key: 12, name: 'Make Dinner' },
  { key: 13, name: 'Leisure Time' },
  { key: 14, name: 'Walk' },
  { key: 15, name: 'Work on Project' },
];

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <Text style={styles.biggerText}>Ongoing Tasks</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.itemTaskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    itemTaskContainer: {
        width: "125%", 
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#E8D1BA',
        borderRadius: 20,
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    biggerText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
