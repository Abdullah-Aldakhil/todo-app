import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {useSelector} from "react-redux";
import { deleteTask } from "./redux/taskSlice"
import {useDispatch} from "react-redux"

const TodoList = () => {
  const dispatch = useDispatch ();
  const todos = useSelector((state) => state.tasks);
  const data = [
    {
      id: 1,
      title: "Learn React Native",
    },
    {
      id: 2,
      title: "Learn Redux Toolkit",
    },
  ];
  const onDelete = (id) => {
    dispatch(
          deleteTask({
      id: id ,
    })
      );
  };


  const renderItems = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Ionicons name="ios-trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e9e9e9",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  title: {
    fontSize: 24,
    right:64,
  },
  deleteButton: {
    left:64,
    
  },
});
