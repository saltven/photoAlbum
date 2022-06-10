import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const Photo = ({route, navigation}) => {
    const [photoTitle, setPhotoTitle] = useState('');
    const [isEditable, setEditable] = useState(false);
    const [inputHeight, setInputHeight] = useState(5);
    const { photoId, photoData } = route.params;

    useEffect(() => {
        renderEntity(photoId, photoData, 'title')
    },[])

    const renderEntity = (currentId, data, itemType) => {
        for (let i = 0; i < data.length; i++){
            if (itemType === 'image') {
                if (data[i].id === currentId) {
                    return data[i].url
                }
            }

            if (itemType === 'title') {
                if (data[i].id === currentId) {
                    setPhotoTitle(data[i].title)
                }
            }
        }
    }

    const editTitle = () => {
        setEditable(true)
    }

    const doneEditTitle = () => {
        setEditable(false)
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: renderEntity(photoId, photoData, 'image')}} style={styles.photo}/>
            {!isEditable ? (
                    <Text style={styles.title}>{photoTitle}</Text>
                ) : (
                    <View style={[styles.inputContainer, {height: Math.max(35, inputHeight)}]}>
                        <TextInput 
                            style={styles.input}
                            value={photoTitle}
                            onChangeText={(val) => setPhotoTitle(val)}
                            returnKeyType="done"
                            multiline={true}
                            onContentSizeChange={(evt) => {
                                setInputHeight(evt.nativeEvent.contentSize.height)
                            }}
                        />
                    </View>
                )
            }
            <TouchableOpacity onPress={!isEditable ? editTitle : doneEditTitle}>
                <View style={styles.editButton}>
                    <Image style={{width: '30px', height: '30px'}}source={require(`../assets/icons/${!isEditable ? 'draw.png' : 'check.png'}`)}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems : "center",
        justifyContent: 'center',
    },
    photo: {
        width: width,
        height: width
    },
    title: {
        width: '90%',
        marginTop: '10px',
        fontFamily: 'Helvetica',
        fontWeight: 600,
        color: '#2f3640'
    },
    inputContainer: {
        marginTop: '10px',
        width: '90%',
        borderWidth: 1,
        borderColor: '#2EB6AE',
        flexWrap: 'wrap',
    },
    input: {
        fontFamily: 'Helvetica',
        flex: 1,
        fontWeight: 600,
        color: '#2f3640'
    },
    editButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#2EB6AE',
        shadowColor: "#868686",
        shadowOffset: {
            width: 0,
            height: 14,
        },
        shadowOpacity:  0.24,
        shadowRadius: 15.38,
        elevation: 19,
        position: 'fixed',
        top: '88%',
        left: '79%'
    }
});

export default Photo