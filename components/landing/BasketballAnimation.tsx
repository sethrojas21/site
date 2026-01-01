import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type HoopProps = {
  delay: number;
  startX: number;
  startY: number;
  pattern: 'vertical' | 'horizontal' | 'diagonal' | 'wave';
};

const Hoop = ({ delay, startX, startY, pattern }: HoopProps) => {
  const translateX = useSharedValue(startX);
  const translateY = useSharedValue(startY);

  useEffect(() => {
    // Different movement patterns for each hoop
    switch (pattern) {
      case 'vertical':
        translateY.value = withDelay(
          delay,
          withRepeat(
            withSequence(
              withTiming(startY - 100, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
              withTiming(startY + 100, { duration: 2000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
          )
        );
        break;
      case 'horizontal':
        translateX.value = withDelay(
          delay,
          withRepeat(
            withSequence(
              withTiming(startX + 200, { duration: 3000, easing: Easing.inOut(Easing.ease) }),
              withTiming(startX - 200, { duration: 3000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
          )
        );
        break;
      case 'diagonal':
        translateX.value = withDelay(
          delay,
          withRepeat(
            withSequence(
              withTiming(startX + 150, { duration: 2500, easing: Easing.inOut(Easing.ease) }),
              withTiming(startX - 150, { duration: 2500, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
          )
        );
        translateY.value = withDelay(
          delay,
          withRepeat(
            withSequence(
              withTiming(startY - 80, { duration: 2500, easing: Easing.inOut(Easing.ease) }),
              withTiming(startY + 80, { duration: 2500, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
          )
        );
        break;
      case 'wave':
        translateX.value = withDelay(
          delay,
          withRepeat(
            withTiming(startX + 250, { duration: 4000, easing: Easing.inOut(Easing.sin) }),
            -1,
            true
          )
        );
        translateY.value = withDelay(
          delay,
          withRepeat(
            withTiming(startY + 60, { duration: 2000, easing: Easing.inOut(Easing.sin) }),
            -1,
            true
          )
        );
        break;
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <Animated.View style={[styles.hoopContainer, animatedStyle]}>
      {/* Backboard */}
      <View style={styles.backboard} />
      {/* Rim */}
      <View style={styles.rim} />
      <View style={styles.net} />
    </Animated.View>
  );
};

export default function BasketballAnimation() {
  const hoops = [
    { delay: 0, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 100, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 200, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 300, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 400, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 500, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 600, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 700, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 800, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 900, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 1000, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
    { delay: 1100, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'diagonal' as const },
    { delay: 1200, startX: Math.random() * SCREEN_WIDTH, startY: Math.random() * SCREEN_HEIGHT, pattern: 'wave' as const },
  ];

  return (
    <View style={styles.container} pointerEvents="none">
      {/* Render hoops */}
      {hoops.map((hoop, index) => (
        <Hoop key={`hoop-${index}`} {...hoop} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  hoopContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
  },
  backboard: {
    width: 60,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  rim: {
    width: 50,
    height: 8,
    backgroundColor: 'rgba(255, 107, 53, 0.8)',
    borderRadius: 4,
    marginTop: -4,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 53, 1)',
  },
  net: {
    width: 40,
    height: 30,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -2,
  },
});
