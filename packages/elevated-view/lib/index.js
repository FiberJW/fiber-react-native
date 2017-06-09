//
import React, { Component } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

export default class ElevatedView extends Component {
  static defaultProps = {
    feedbackEnabled: false,
    activeElevation: 0,
    elevation: 0,
    elevationColor: "black",
    style: {},
    onPress: () => {},
    onLongPress: () => {}
  };

  static Elevation = (elevation = 0, color = "black") => ({
    elevation: elevation,
    shadowColor: color,
    shadowOpacity: 0.03 * elevation + 0.068,
    shadowRadius: 0.64 * elevation + -0.16,
    shadowOffset: {
      height: 0.6 * elevation + -0.34
    }
  });

  state = {
    height: 0,
    width: 0,
    elevation: new Animated.Value(this.props.elevation)
  };

  animateTo = (elevation = 0) => {
    if (this.props.feedbackEnabled) {
      Animated.spring(this.state.elevation, {
        toValue: elevation,
        useNativeDriver: true
      }).start();
    }
  };

  componentDidMount() {
    this.state.elevation.addListener(({ value }) => this.forceUpdate());
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onLayout={({ nativeEvent: { layout: { width, height } } }) => {
          this.setState(prevState => ({
            ...prevState,
            height,
            width
          }));
        }}
        onPressIn={() => this.animateTo(this.props.activeElevation)}
        onPressOut={() => this.animateTo(this.props.elevation)}
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}
      >
        <Animated.View
          style={[
            this.props.style,
            ElevatedView.Elevation(
              this.state.elevation._value,
              this.props.elevationColor
            )
          ]}
        >
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
