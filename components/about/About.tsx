import { View } from "react-native";
import CircularHeadshot from "./headshot";

export default function About() {
    
    return (
        <View>
            <CircularHeadshot 
            imagePath={require("../../assets/images/headshot.jpg")} 
            size={300}/>
        </View>
    )
}