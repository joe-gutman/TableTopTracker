import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddGameToCollection from "../Collections/AddGameToCollection";
import {handleCloseModal} from "../../state/modal/actions";
import { Portal, Text} from "react-native-paper";
import {Pressable, StyleSheet, View, Modal} from "react-native";


export default function AppModal() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);
  const {open, template, data} = useSelector(state => state.modal);

  function closeModal() {
    dispatch(handleCloseModal());
  }

  function getContent() {
    if(open) {
      if(template === 'ADD_TO_COLLECTION') {
        return <AddGameToCollection open={open} {...data} onClose={closeModal}/>
      }
    }
    return <Text>SOMETHINGS GONE TERRIBLY WRONG</Text>
  }



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => handleCloseModal()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {getContent()}
          {/*<Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleCloseModal()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>*/}
        </View>
      </View>
    </Modal>
  )

  return (
    <Portal>
      <Modal visible={open} onDismiss={closeModal} contentContainerStyle={styles.modalView}>
        {getContent()}
      </Modal>
    </Portal>
  );
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