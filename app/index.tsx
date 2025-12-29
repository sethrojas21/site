// app/index.tsx
import { View, Text } from 'react-native';
import { colors } from '../theme/color';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: colors.brand.primary}}>Hi My Name is Seth Rojas</Text>
    </View>
  );
}