// app/index.tsx
import { View, Text } from 'react-native';
import { colors } from '../theme/color';
import Landing from '@/components/landing/landing';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Landing></Landing>
    </View>
  );
}