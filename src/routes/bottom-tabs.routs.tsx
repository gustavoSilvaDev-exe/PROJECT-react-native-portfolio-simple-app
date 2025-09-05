import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SkillScreen } from "../screens/SkillScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomTabsRoutes(){

    return(
        <Navigator>
            <Screen
                name='HOME'
                component={HomeScreen}
                options={{
                    tabBarIcon:({focused, color, size})=>(
                        <MaterialCommunityIcons
                            name='home'
                            color='orange'
                            size={30}
                        />
                    ),
                    tabBarStyle: {backgroundColor: 'black'},
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'white'
                }}
            />
            <Screen
                name='SKILL'
                component={SkillScreen}
                options={{
                    tabBarIcon:({focused, color, size})=>(
                        <MaterialCommunityIcons
                            name='star'
                            color='orange'
                            size={30}
                        />
                    ),
                    tabBarStyle: {backgroundColor: 'black'},
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'white'
                }}
            />
        </Navigator>
    )
}