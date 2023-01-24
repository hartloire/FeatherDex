
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import auth from '@react-native-firebase/auth'
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { HOME_SCREEN_ROUTE, DETAILS_SCREEN_ROUTE, AppStackParamList, AppStackRoutesType } from './navigation';




const appStackRoutes: Array<AppStackRoutesType> = [
    {
        name: HOME_SCREEN_ROUTE,
        component: HomeScreen,
    },
    {
        name: DETAILS_SCREEN_ROUTE,
        component: DetailsScreen,
    }
]


const Stack = createStackNavigator<AppStackParamList>();


function AppStack() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    return (
        <Stack.Navigator>
            {
                appStackRoutes.map((stackRoute) => (
                    <Stack.Screen key={stackRoute.name} {...stackRoute}/>
                ))
            }
        </Stack.Navigator>
    )
}

export default AppStack;