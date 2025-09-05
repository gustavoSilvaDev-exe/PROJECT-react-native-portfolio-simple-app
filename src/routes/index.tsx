import { NavigationContainer } from "@react-navigation/native"
import { BottomTabsRoutes } from "./bottom-tabs.routs"

export function Routes(){
    return(
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
}