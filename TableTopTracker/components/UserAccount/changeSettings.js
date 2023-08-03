import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, CheckBox, ScrollView, TextInput} from 'react-native';

export default function EditAccount ({navigation, route}) {
    const [image, setImage] = useState();
    const [name, setName] = useState('Bob Peterson');
    const [username, setUsername] = useState('legend27');
    const [age, setAge] = useState('18');
    const [playStyle, setPlayStyle] = useState('alone')
    const [favorite, setFavorite] = useState('Civilization');
    const [categories, setCategories] = useState([
        'category 1',
        'category 2',
        'category 3',
        'category 4',
        'category 5',
        'category 6',
        'category 7',
        'category 8',
        'category 9',
        'category 10',
    ]);

    const [leftCol, setLeftCol] = useState([])
    const [rightCol, setRightCol] = useState([])

    function labelCategories() {
        console.log('categories: ', categories);
      
        categories.forEach((category, index) => {
          if (index % 2 === 0) {
            setLeftCol((prevLeftCol) => [...prevLeftCol, category]);
            console.log('current leftCol: ', leftCol);
            console.log('setLeft: ' + index, leftCol);
          } else {
            setRightCol((prevRightCol) => [...prevRightCol, category]);
            console.log('current leftCol: ', rightCol);
            console.log('setRight: ' + index, rightCol);
          }
        });
    }

    useEffect(() => {

        labelCategories()

    }, [])

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
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <View style={styles.InnerContainer}>
            <View style = {styles.circleContainer}>
            </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.NameText}>
                        {name}
                    </Text>
                </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.InputText}>
                        {username}
                    </Text>
                </View>
            
                <TextInput style = {styles.EditInput}>
                </TextInput>
            
            
                <TextInput style = {styles.EditInput}>
                </TextInput>
            
            
                <TextInput style = {styles.EditInput}>
                </TextInput>
            
            
                <TextInput style = {styles.EditInput}>
                </TextInput>
                
                <View style={styles.MainCategoryContainer}>
                    <View style={styles.CategoryColumn}>
                        {leftCol.map((category) => (
                        <View key={category} style={styles.eachCategory}>
                            <CheckBox value={true} />
                            <Text>{category}</Text>
                        </View>
                        ))}
                    </View>
                    <View style={styles.CategoryColumn}>
                        {rightCol.map((category) => (
                            <View key={category} style={styles.eachCategory}>
                                <CheckBox value={true} />
                                <Text>{category}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}