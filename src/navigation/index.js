import {
    createStackNavigator
} from 'react-navigation';
import Home from '../components/Home';


export const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
}, {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
});