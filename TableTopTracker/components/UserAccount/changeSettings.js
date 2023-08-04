import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, Image, ImageBackground, ScrollView, TextInput} from 'react-native';
import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'

export default function EditAccount ({navigation, route}) {
    const [image, setImage] = useState();
    const [name, setName] = useState('Bob Peterson');
    const [username, setUsername] = useState('legend27');
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newAge, setNewAge] = useState();
    const [playStyle, setPlaystyle] = useState()
    const [favorite, setFavorite] = useState();
    const [selectedCategories, setSelectedCategories] = useState([])

    const playstyles = ["Solo", "1v1", "2-4", "4-8", '8+']
    const creatures = ['Griffin', 'Chimera', 'Phenoix', 'Dragon', 'Pikachu']
    const category = ['Fantasy', 'Action', 'Strategy', 'RPG']

    // useEffect(() => {
    // }, [])
    

    return (
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <View style={styles.InnerContainer}>
                <View style = {styles.circleContainer}>
                <TouchableOpacity onPress={handlePhotoUpload}>
                    {photo ? (
                    <Image source={photo} style={styles.photo} />
                    ) : (
                    <Text style={styles.placeholderText}>Click to add photo</Text>
                    )}
                </TouchableOpacity>
                </View>
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setName(e.target.value), console.log("Current Password: ", currentPassword)}}
                        placeholder = {name}>
                    </TextInput>
                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => {setUsername(e.target.value), console.log("Current Password: ", currentPassword)}}
                        placeholder = {username}>
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
                        onChange = {(e) => {setNewAge(e.target.value), console.log("new age: ", newAge)}}
                        placeholder = "Adjust Age">
                    </TextInput>

                    <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => setFavorite(e.target.value)}
                        placeholder = "Change Favorite Board Game">
                    </TextInput>
                
                    {/* <TextInput 
                        style = {styles.EditInput}
                        onChange = {(e) => setPlaystyle(e.target.value)}
                        placeholder = "Adjust Preferred Playstyle">
                    </TextInput> */}
                    <SelectList
                        data={playstyles}
                        setSelected={(selectedItem) => {setPlaystyle(selectedItem,)}}
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
                        setSelected={(selectedItem) =>   {setFavorite(selectedItem)}}
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