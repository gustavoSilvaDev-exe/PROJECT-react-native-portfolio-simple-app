import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./StylesScreen";
import foto from "../../assets/foto.png";

export function SkillScreen(){
    return(
        <View
            style={styles.container}
        >
            <Image style={styles.image} source={foto}></Image>

            <Text style={styles.text}>My Skills</Text>

            <Text style={styles.text}>UI Design: ⭐⭐⭐⭐⭐</Text>
            
            <Text style={styles.text}>UX Design: ⭐⭐⭐⭐⭐</Text>
            
            <Text style={styles.text}>Figma: ⭐⭐⭐⭐⭐</Text>

            <Pressable
                style={styles.button}
            >
                <Text style={styles.text}>Contact Me</Text>
            </Pressable>

            <StatusBar style='auto'/>
        </View>
    )
}