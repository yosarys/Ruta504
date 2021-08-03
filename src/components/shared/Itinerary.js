import React,{useState} from "react";
import { Dimensions, StyleSheet, Text, View} from "react-native";
import { Card, Caption,IconButton, Portal,Dialog,Paragraph,Button} from "react-native-paper";
import { format } from "date-fns";

/*Se aplico el "Dialog" para el botón de borrar para su confirmación*/
/*https://callstack.github.io/react-native-paper/dialog.html*/

const { height, width } = Dimensions.get("screen");
function Itinerary({ id, title,description,date,timestamp}) {
  const [visible, setVisible]=useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <Card style={styles.container}>
        <Card.Title title={title}/>
      <Text>{description}</Text>
      <View styles={styles.fecha}>
        <Text>{date.toDate().toLocaleDateString()}</Text>
      </View>
    <View> 
      <IconButton style={{flexDirection:'row', top:25}}
        icon="delete"
        size={25}
        color='red'
        onPress={showDialog}
      />
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>¡Advertencia!</Dialog.Title>
             <Dialog.Content>
               <Paragraph>¿Esta seguro que desea eliminar?</Paragraph>
             </Dialog.Content>
             <Dialog.Actions>
               <Button onPress={hideDialog}>Eliminar</Button>
               <Button onPress={hideDialog}>Cancelar</Button>
             </Dialog.Actions>
         </Dialog>
        </Portal>
    </View>
      <Caption style={styles.timestamp}>
        {format(timestamp, "eee H:mm")}
      </Caption>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.92,
    height: height * 0.23,
    margin: 5,
    padding:5
  },
  timestamp: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop:-5
  },
});

export default Itinerary;
