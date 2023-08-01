import React, {useState, useEffect} from 'react';
import styles from './styles'
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default function UserSettings ({navigation, route}) {
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [playStyle, setPlayStyle] = useState()
    const [favorite, setFavorite] = useState();
    const [categories, setCategories] = useState();

    const HandleLogOut = (e) => {

    }

    const UpdateUsername = (e) => {

    }

    const UpdateName = (e) => {

    }

    const UpdateAge = (e) => {

    }

    const UpdateStyle = (e) => {

    }

    const UpdateFavorite = (e) => {

    }

    const UpdateCategories = (e) => {

    }

    return (
        <View style = {styles.MainContainer}>
            <View>

            </View>
            <View style = {styles.InputContainer}>
                <Text>
                    Age:
                </Text>
                <Text>
                    18
                </Text>
            </View>
            <View style = {styles.InputContainer}>
                <Text>
                    Preferred Play Style:
                </Text>
                <Text>
                    alone
                </Text>
            </View>
            <View style = {styles.InputContainer}>
                <Text>
                    Mythical Creature
                </Text>
                <Text>
                    Fairy
                </Text>
            </View>
            <View style = {styles.InputContainer}>
                <Text>
                    Favorite Game
                </Text>
                <Text>
                    Civilization
                </Text>
            </View>
        </View>
    )
}