import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
    }

    render() {
        const { viewStyle } = styles;

        return(
            <View style={viewStyle}>
                <Text>Album List</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        paddingTop: 15,
        contentJustify: 'center',
        alignItems: 'center'
    }
}

export default AlbumList;