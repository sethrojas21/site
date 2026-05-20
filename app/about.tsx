import { View, Image, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/headshot.jpeg')} 
        style={styles.image} 
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 150, 
    height: 150,
    borderRadius: 10
  }
})