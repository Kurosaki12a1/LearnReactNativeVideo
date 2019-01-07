import Video from 'react-native-video';
import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList, TouchableHighlight } from 'react-native';

export default class PlayVideo extends Component {

    state = { src: 'http://183.80.199.24/out/i/30.mpd', vtt: '', paused: false }


    _onPause() {
        if (this.state.paused) {
            this.setState({ paused: false })
        }
        else {
            this.setState({ paused: true })
        }

    }


    render() {


        return (
            <TouchableHighlight style={{ flex: 2 }}
                onPress={() => this._onPause()}
            >
                <Video
                    source={require('../videosample/sample1.mp4')}
                    style={styles.backgroundVideo}
                    repeat={true}
                    resizeMode={"cover"}
                    volume={1.0}
                    paused={this.state.paused}
                />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1
    }
})