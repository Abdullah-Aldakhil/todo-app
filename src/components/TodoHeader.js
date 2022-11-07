import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTask } from "./redux/taskSlice";

const TodoHeader = () => {
  const dispatch = useDispatch ();

   const onSubmitTask =  () => {
     if (todo.trim().length===0){
      alert("Please enter a task")
      setTodo("");
      return;
     }
     dispatch(
      addTask({
      task: todo,
     })
     );
     setTodo("");
   };

  const [todo, setTodo] = useState("");

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Todo List
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 8,
            margin: 8,
            width: "80%",
            borderRadius: 8,
          }}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 8,
            margin: 8,
            width: "80%",
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={onSubmitTask}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});
