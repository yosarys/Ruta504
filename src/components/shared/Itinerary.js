import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Card, Caption, IconButton } from "react-native-paper";
import { format } from "date-fns";

const { height, width } = Dimensions.get("screen");

function Itinerary({ id, title,description,date,timestamp, deleteActivity}) {
  return (
    <Card style={styles.container}>
      <Card.Title title={title} />
      <Text>{description}</Text>
      <Text>{date.toDate().toLocaleDateString()}</Text>
      <IconButton
        icon="delete"
        size={24}
        color='red'
        onPress={() => console.log("borrado")}/>
      <Caption style={styles.timestamp}>
        {format(timestamp, "eee H:mm")}
      </Caption>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.95,
    height: height * 0.20,
    margin: 5,
  },
  timestamp: {
    alignSelf: "flex-end",
    marginRight: 15,
  },
});

export default Itinerary;
