import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = { imagePath: ImageSourcePropType, size: number };

export default function CircularHeadshot({imagePath, size}: Props) {
    const containerSize = size;
    const imageSize = size - 4;
    
    return (
        <View style={[styles.container, { width: containerSize, height: containerSize, borderRadius: containerSize / 2 }]}>
            <Image 
                source={imagePath}
                style={{ width: imageSize, height: imageSize, borderRadius: imageSize / 2 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    // Optional: add a border around the image
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures everything inside the container stays within the border radius
  },
  image: {
    // Styling is applied inline to make the size dynamic based on props
  },
});