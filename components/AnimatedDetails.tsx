import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

type AnimatedDetailsProps = PropsWithChildren<{
  isExpanded: boolean;
}>;

export default function AnimatedDetails({ isExpanded, children }: AnimatedDetailsProps) {
  const progress = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isExpanded ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [isExpanded, progress]);

  const height = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0.6, 1],
  });

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-4, 0],
  });

  return (
    <Animated.View style={[styles.clipper, { height, opacity }]}>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ translateY }],
          },
        ]}
        onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  clipper: {
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    width: "100%",
  },
});
