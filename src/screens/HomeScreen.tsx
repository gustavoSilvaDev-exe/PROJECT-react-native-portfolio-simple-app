import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./StylesHome";
import foto from "../../assets/foto.png";

export function HomeScreen(){
    return(
        <View 
            style={styles.container}
        >
            <View style={styles.photoContainer}>
                <Image style={styles.image} source={foto}></Image>
            
                <Text style={styles.title}>Gustavo Silva</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                >
                    <Text style={styles.text}>Linkedin</Text>
                </Pressable>
                
                <Pressable
                    style={styles.button}
                >
                    <Text style={styles.text}>Behance</Text>
                </Pressable>
            
                <Pressable
                    style={styles.button}
                >
                    <Text style={styles.text}>E-mail</Text>
                </Pressable>
            </View>    

            <StatusBar style='auto'/>
        </View>
    )
}