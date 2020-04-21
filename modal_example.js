import React, {Component} from 'react';
    import { AppRegistry, View, Text } from 'react-native';
    import { WebView } from 'react-native-webview';

    export default class test1 extends Component{
      render() {
        return (
          <WebView style={{marginTop:30}} source={{ uri: 'https://google.com' }} />
        );
      }
    }

    AppRegistry.registerComponent('test1', () => test1);