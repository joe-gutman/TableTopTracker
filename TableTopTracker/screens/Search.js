import React from 'react';
import { View, Text, Button, CheckBox } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';
import { useState } from 'react';

import Slider from '../components/Sliders/Slider.js';

export default function Search({navigation, route}) {
  let { user } = route.params;
  const [ gameWarden, setGameWarden ] = useState(true);
  const [ searchFields, setSearchFields ] = useState([['players', null], ['time', null], ['age', null], ['complexity', null]])

  const searchWrapper = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  }

  const handleSearch = () => {
    var input = document.getElementById('searchInput');
    var title = input.value;
    console.log(title);

    navigation.navigate('Search Results', {user: user})
  }


  const advancedSearch = [['number of players', 6], ['playing time', 360], ['recommended age', 18], ['complexity', 5]]
  var counter = -1;
  return (
    <View style={searchWrapper}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>
                Search by title
            </Text>
            <input id="searchInput" style={{width: '70%'}}/>
        </View>
        <View id='advancedSearch' style={searchWrapper}>
            {advancedSearch.map(field => {
                var value = 'integer';
                if (field[0] === 'complexity') {
                    value = 'float'
                }
                counter++;
                return (
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text style={{display: 'flex', justifyContent:'center', alignItems:'center', width:'30%'}}>
                            {field[0]}
                        </Text>
                        <Slider name={field[0]} max={field[1]} values={value} index={counter} searchFields={searchFields} setSearchFields={setSearchFields}/>
                        <Text style={{display: 'flex', justifyContent:'center', alignItems:'center', width: '20%'}}>
                            +/-
                            <input id={field[0] + 'plusOrMinus'}/>
                        </Text>
                    </View>

                )
            })}
        </View>
        <Button
        title="Search"
        onPress={handleSearch} />
        <NavBar navigation={navigation} user={user} gameWarden={gameWarden} />

    </View>
  )
}