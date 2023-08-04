import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ChangeSettings from '../components/UserAccount/ChangeSettings.js';

import UserNav from '../components/UserAccount/UserNav.js';
import Logout from '../components/UserAccount/Logout.js';
import Save from '../components/UserAccount/Save.js';

export default function EditAccount ({navigation, route}) {
    const { user, handleLogout } = route.params;
    const [isSaved, setIsSaved] = React.useState(false)

    const HandleSave = (e) => {
        console.log("got saved?")
        setIsSaved(!isSaved);
    }

    return (
        <View style = {styles.MainView}>
            {/* <Text>This is {user.email}'s HomePage</Text> */}
            <View style = {styles.TopNav}>
                <Save navigation={navigation} HandleSave = {HandleSave} user = {user}/>
                <Logout navigation={navigation} user = {user}/>
            </View>
            <ChangeSettings user = {user} isSaved = {isSaved} HandleSave = {HandleSave}/>
            {/* <Button title="Log Out" onPress={handleLogout} /> */}
            <UserNav navigation={navigation} user={user}/>
        </View>
    )
}

const styles = StyleSheet.create({
    TopNav: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: '#ECE4B7',
      width: "100%",
    },
    MainView: {
        display: 'flex',
        flexDirection: 'column'
    }
})  