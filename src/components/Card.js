import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors, Fonts } from '../styles';

const Card = ({ header = '', bodyText, bodyTextStyle = Fonts.body }) => (
  <View style={styles.rootContainer}>
    {header && (
      <Text style={[Fonts.subHeading, styles.header]} accessibilityRole="header">
        {header}
      </Text>
    )}
    <Text style={[bodyTextStyle, styles.body]}>{bodyText}</Text>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.85,
    padding: 15,
    marginTop: 25,
    marginHorizontal: 5,
    backgroundColor: Colors.background,
    borderRadius: 6,
    // Android shadow
    elevation: 6,
    // iOS shadow
    shadowColor: Colors.shadow,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  header: {
    marginBottom: 10,
  },
  body: {
    textAlign: 'center',
  },
});
