import { createBottomTabNavigator } from 'react-navigation';
import Homepage from './Homepage';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Homepage: {
            screen: Homepage
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Homepage',
        headerMode: 'none'
    }
);