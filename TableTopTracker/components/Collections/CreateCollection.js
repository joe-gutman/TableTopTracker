import React, {useEffect, useState} from "react";
import {Alert, View, Pressable, StyleSheet} from 'react-native';
import {Portal, Modal, Text} from 'react-native-paper';
import {fetchUserCollections} from "../../util/api";

export default function CreateCollection({user, visible, onClose}) {
  const [collections, setCollections] = useState([1]);


  /*useEffect(() => {
    fetchUserCollections()
      .then((x) => {

      })
  }, [])*/

  console.log(user)

  return collections
    ? (
      <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalView}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
          <Text>{JSON.stringify(user)}</Text>
        </Modal>
      </Portal>
    ): null;

  /*return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          onClose(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onClose(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )*/
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
