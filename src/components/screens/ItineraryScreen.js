import React, { useContext, useEffect } from "react";
import { View, StyleSheet}  from 'react-native';
import { Title } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as ActivityContext } from "../../providers/ActivityContext";
import ItineraryList from "../shared/ItinerartList";

function ItineraryScreen({ navigation }) {
  const { state } = useContext(AuthContext);
  const { state: ActivityState, getActivity } = useContext(ActivityContext);

  useEffect(() => {
    getActivity(state.user.id);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Title style={styles.title}>Mis Actividades</Title>
        <ItineraryList activities={ActivityState.activities} navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    paddingLeft: 10,
  },
  fab: {
    backgroundColor: 'blue',
    position: "absolute",
    right: 0,
    bottom: 10,
    margin: 20,
  },
});

export default ItineraryScreen;
