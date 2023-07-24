import { StyleSheet, Text, Image, Dimensions, ScrollView, View } from 'react-native';
import { Fonts, Colors } from '../styles';
import Card from '../components/Card';

const headerImage = require('../../assets/yellow-campervan.jpg');

const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Image
      source={headerImage}
      style={styles.image}
      resizeMode="cover"
      accessibilityLabel="Image of yellow campervan"
    />
    <View style={styles.headingContainer}>
      <Text style={Fonts.heading} accessibilityLabel="App title" accessibilityRole="header">
        Trivi<Text style={Fonts.brand}>AA</Text>
      </Text>
    </View>
    <View>
      <Card
        bodyTextStyle={Fonts.body}
        header="Welcome to TriviAA!"
        bodyText="
      The number one quiz app to pass time on the road (probably)!  
      Fancy yourself a quizzer?  
      Show off your smarts with questions on History, Geography, Entertainment and more..."
      />
    </View>
  </ScrollView>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height * 0.4,
    width: '100%',
  },
  headingContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 35,
    padding: 20,
    marginTop: -35,
    // Android shadow
    elevation: 3,
    // iOS shadow
    shadowColor: Colors.shadow,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});
