import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ElevatedView from "fiber-react-native-elevated-view";

interface State {
  count: number;
}

export default class App extends Component<void, State> {
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
