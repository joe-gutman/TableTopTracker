
import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, CheckBox, ScrollView, ImageBackground, Image } from 'react-native';

export default function UserSettings ({navigation, route, user}) {

    const [image, setImage] = useState();
    const [name, setName] = useState(' Bob Peterson ');
    const [username, setUsername] = useState(' legend27 ');
    const [age, setAge] = useState('18');
    const [playStyle, setPlayStyle] = useState('1vs1')
    const [creature, setCreature] = useState('Gryffin');
    const [favorite, setFavorite] = useState('Monopoly');
    const [categories, setCategories] = useState([
        'Fantasy',
        'Action',
        'Strategy',
        'War',
        'Quest',
        'Mystery',
        'Dice',
        'Numbers',
        'RPG',
        'Sci-Fi',
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

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         axios.get(`http://localhost:3000/users?email=${user.email}`)
    //             .then((res) => {
    //                 const userInfo = res.data.userData
    //                 console.log("data from get: ", res.data.userData)
    //                 setName(userInfo.fullname)
    //                 setUsername(userInfo.username)
    //                 setAge(userInfo.age)
    //                 setPlayStyle(userInfo.preferred_playstyle)
    //                 setFavorite(userInfo.favorite_board_game)
    //                 setCreature(userInfo.favorite_mythical_creature)
    //                 setCategories(userInfo.selectedcategories)
    //             })
    //             .catch((err) => {
    //                 console.error(err)
    //             })
    //     })
    //     return unsubscribe;
    // }, [navigation])

    return (
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <ImageBackground
            source={require('../../assets/Asset-Background-Wood.png')}
            style={styles.wood} >


            <View style={styles.InnerContainer}>
                <View style = {styles.circleContainer}>
                <Image
                            source={require('../../assets/profileicon.png')}
                            style={styles.profileImage}
                        />
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
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Age:
                    </Text>
                    <Text style = {styles.InputText}>
                        {age}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Preferred Play Style:
                    </Text>
                    <Text style = {styles.InputText}>
                        {playStyle}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Mythical Creature:
                    </Text>
                    <Text style = {styles.InputText}>
                        {creature}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Favorite Game:
                    </Text>
                    <Text style = {styles.InputText}>
                        {favorite}
                    </Text>
                </View>
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
            </ImageBackground>
        </ScrollView>
    )
}