import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ImageBackground}  from 'react-native';
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
    <ImageBackground source= {require('../../../assets/agregar.jpg')} style={{flex: 1}}>
      <View style={styles.container}>
        <ItineraryList activities={ActivityState.activities} navigation={navigation} />
      </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ItineraryScreen;
