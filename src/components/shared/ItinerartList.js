import React, { useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Itinerary from "./Itinerary";

function ItineraryList({ activities}) {
  
  const emptyFlatList = (
    <View style={styles.emptyActivity}>
      <Text style={{fontSize:20}}>Aún no tienes actividades creadas...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        ListEmptyComponent={emptyFlatList}
        renderItem={({ item }) => (
          <>
              <Itinerary
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                timestamp={item.timestamp}
              />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyActivity: {
    flex: 1,
    marginTop:250,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default ItineraryList;
