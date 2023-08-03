import React, {useEffect, useState} from "react";
import {Alert, View, Pressable, StyleSheet} from 'react-native';
import {Portal, Modal, Text} from 'react-native-paper';
import {fetchUserCollections} from "../../util/api";
import {useSelector} from "react-redux";

export default function CreateCollection({gameToAdd, onClose}) {
  const [collections, setCollections] = useState();
  const user = useSelector(state => state.app.user);

  console.log(user)

  return <Text>ADD GAME TO COLLECTION</Text>;
}
