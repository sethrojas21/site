import { colors } from "@/theme/color";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import * as config from '../../config/config';
import { FontSize } from "@/theme/font";

export default function Landing () {

    return (
        <View style={styles.container}>

            <Text style={styles.preIntro}>HI, I'M</Text>

            <Text style={styles.fullName}>{config.FULL_NAME}</Text>

            <Text style={styles.devName}>Software Developer & Data Scientist</Text>

        </View>
    )
}


const { width, height } = Dimensions.get('window');
const scale = width / 375; // Base width (e.g., iPhone 11)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        gap: 10
    },
    preIntro: {
        color: colors.text.secondary,
        fontSize: FontSize.xxs
    },
    fullName: {
        color: colors.brand.primary,
        fontSize: FontSize.xxl
    },
    devName: {
        color: colors.text.primary,
        fontSize: FontSize.xxs
    }
    
})