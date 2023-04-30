import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../Firebase";
const CustomListItem = ({ id, chatName, enterChat }) => {
  const [ChatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: ChatMessages?.[0]?.photoURL ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrb7fzko1ixeVOFzzY62P6n2G_kyyZH5C8jV_U32hhg&s",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {ChatMessages?.[0]?.displayName}:{ChatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
