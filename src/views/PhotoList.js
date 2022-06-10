import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';

import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PhotoList = ({route, navigation}) => {
    const [photos, setPhotos] = useState([]);
    const { albumNo } = route.params;

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${albumNo}/photos`)
            .then((res) => {
                setPhotos(res.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    },[])

    const photoDetail = photos.map((item, key) => {
        return (
            <TouchableOpacity testID='myButton' key={key} onPress={() => {navigation.navigate('Photo', { photoId: item.id, photoData: photos })}}>
                <Image source={{uri: item.thumbnailUrl}} style={styles.thumbnail}/>
            </TouchableOpacity>
        )
    })
    return (
        <ScrollView contentContainerStyle={{ flexDirection: 'row' }}>
            <View style={styles.container}>
                {photoDetail}
            </View>
        </ScrollView>
    );
}

const width = Dimensions.get('window').width
const thumbnailWidth = Math.round(width / 3 * 100) / 100 + 'px' 

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 0
    },
    thumbnail: {
        width: thumbnailWidth, 
        height: thumbnailWidth,
        float: 'left'
    }
});

export default PhotoList