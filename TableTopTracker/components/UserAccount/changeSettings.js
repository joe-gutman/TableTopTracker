import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'
import axios from 'axios'

export default function EditAccount ({navigation, user, isSaved, HandleSave}) {

    const [image, setImage] = useState();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [age, setAge] = useState();
    const [playStyle, setPlaystyle] = useState()
    const [boardGame, setBoardgame] = useState();
    const [creature, setCreature] = useState()
    const [selectedCategories, setSelectedCategories] = useState([])
    const [newInfo, setNewInfo] = useState({})

    const playstyles = ["Solo", "1v1", "2-4", "4-8", '8+']
    const creatures = ['Griffin', 'Chimera', 'Phenoix', 'Dragon', 'Pikachu']
    const category = ['Fantasy', 'Action', 'Strategy', 'RPG']
    console.log("email: ", user)
    console.log("isSaved: ", isSaved)

     useEffect(() => {
        setImage(user.photo)
        setEmail(user.email)
        setName(user.fullname)
        setUsername(user.username)
        setAge(user.age)
        setPlaystyle(user.preferred_playstyle)
        setBoardgame(user.favorite_board_game)
        setCreature(user.favorite_mythical_creature)
        setSelectedCategories(user.selectedCategories)

        if(isSaved) {
            console.log("Button is saved")
            setNewInfo({
                username: username,
                fullname: name,
                age: age,
                preferred_playstyle: playStyle,
                selectedCategories: selectedCategories,
                favorite_board_game: boardGame,
                favorite_mythical_creature: creature,
                email: email
            })
            axios.put('/users/edit', newInfo)
            .then((res) => {
                console.log("success updating! ", res)
            }).catch((err) => {
                console.error("failed to update: ", err)
            })
        }
     }, [isSaved])

    return (
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <View style={styles.InnerContainer}>
                <View style = {styles.circleContainer}>
                </View>
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setName(e.target.value), console.log("Current Password: ", currentPassword)}}
                        placeholder = "Change Name">
                    </TextInput>
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setUsername(e.target.value), console.log("Current Password: ", currentPassword)}}
                        placeholder = "Change Username">
                    </TextInput>
                
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setCurrentPassword(e.target.value), console.log("Current Password: ", currentPassword)}}
                        placeholder = "Current Password">
                    </TextInput>
                
                
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setNewPassword(e.target.value), console.log("New Password: ", newPassword)}}
                        placeholder = "New Password">
                    </TextInput>
                
                
                    <TextInput
                        style = {styles.EditInput}
                        onChange = {(e) => {setAge(e.target.value), console.log("new age: ", age)}}
                        placeholder = "Adjust Age">
                    </TextInput>

                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => setBoardgame(e.target.value)}
                        placeholder = "Change Favorite Board Game">
                    </TextInput>
                
                    {/* <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => setPlaystyle(e.target.value)}
                        placeholder = "Adjust Preferred Playstyle">
                    </TextInput> */}
                    <SelectList
                        data={playstyles}
                        setSelected={(selectedItem) => {setPlaystyle(selectedItem)}}
                        placeholder='Select your preferred playstyle'
                        search = {false}
                        boxStyles = {styles.DropDown}
                        dropdownStyles = {styles.DropDown}
                    />

                    {/* <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => setCreature(e.target.value)}
                        placeholder = "Change Your Mythical Creature">
                    </TextInput> */}
                    <SelectList
                        data={creatures}
                        setSelected={(selectedItem) =>   {setCreature(selectedItem)}}
                        placeholder="Select your favorite mythical creature"
                        search = {false}
                        boxStyles = {styles.DropDown}
                        dropdownStyles = {styles.DropDown}
                    />

                    <MultipleSelectList
                        setSelected={(val) => {setSelectedCategories(val)}}
                        data={category} 
                        save="value"
                        label="Categories"
                        search = {false}
                        boxStyles = {styles.DropDown}
                        dropdownStyles = {styles.DropDown}
                        maxHeight = "300"
                        placeholder = "Select your categories"
                    />
                </View>
        </ScrollView>
    )
}