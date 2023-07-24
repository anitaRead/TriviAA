import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/navigation/NavBar';

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </>
  );
}
