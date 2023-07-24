import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

const NavBar = () => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: Colors.secondary,
      tabBarStyle: {
        backgroundColor: Colors.primary,
      },
      tabBarActiveTintColor: Colors.secondary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Quiz"
      component={QuizScreen}
      options={{
        title: 'Quiz',
        tabBarLabel: 'Quiz',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="game-controller" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default NavBar;
