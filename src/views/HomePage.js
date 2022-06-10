import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';

import axios from 'axios';

const HomePage = ({navigation}) => {
    const [mainAlbum, setMainAlbum] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/albums')
            .then((res) => {
                setMainAlbum(res.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    },[])

    const albumNo = mainAlbum.map((item) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => {navigation.navigate('List of Photos', { albumNo: item.id })}}>
                <View style={styles.box}>
                    <Text style={styles.textAlbum}>Album #{item.id}</Text>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                {albumNo}
            </View>
        </ScrollView>
    );
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  box: {
    width: width,
    height: '50px',
    backgroundColor: '#f5f6fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdde1',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center'
  },
  textAlbum: {
    paddingLeft: '10px',
    fontFamily: 'Helvetica',
  }
});

export default HomePage