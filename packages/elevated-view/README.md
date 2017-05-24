# `fiber-react-native-elevated-view`

Supercharge your Views with cross-platform elevation tricks!

<center>
  <img src="https://i.imgur.com/fovLSfP.gif" alt="Elevation View Demo" />
</center>

`yarn add fiber-react-native-elevated-view`

### API

```js
type Props = {
  feedbackEnabled: boolean,
  activeElevation?: number,
  elevation?: number,
  elevationColor?: string,
  children?: Array<mixed>,
  style?: any,
  onPress?: () => any
};
```

### Example

```js
/**
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ElevatedView from "fiber-react-native-elevated-view";

export default class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <ElevatedView
          style={{
            backgroundColor: "#30C1DD",
            padding: 16,
            borderRadius: 4
          }}
          elevation={10}
          elevationColor="#00A4D3"
          feedbackEnabled
          activeElevation={1}
          onPress={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))}
        >
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to rel{this.state.count}ad,{"\n"}
            Cmd+D or shake for dev menu
          </Text>
        </ElevatedView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "white"
  }
});
```