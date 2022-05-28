import { Button } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    <Button
      title="Open camera"
      onPress={() =>
        navigation.navigate('Camera')
      }
    />
    </>
    
  );
};

export default HomeScreen;