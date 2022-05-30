import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, PixelRatio } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
let FONT_BACK_LABEL = 23;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 18;
}
const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#0d0d0d"
        barStyle="light-content"
        showHideTransition="slide"
      />
      <ImageBackground
        source={require("C:/Users/jsury/Desktop/goo/GII/Gii/assets/tr.jpg")}
        resizeMode="cover"
        style={styles.image1}
      >
        <View style={styles.container1}>
          <ImageBackground
            source={require("C:/Users/jsury/Desktop/goo/GII/Gii/assets/image-removebg-preview2.png")}
            resizeMode="contain"
            style={styles.image}
          ></ImageBackground>
        </View>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgb(44,44,44)", "rgb(0,0,0)"]}
          style={styles.container2}
        >
          <View style={styles.container2}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>
                {"\n"}
                Click a picture or choose a picture from gallery to identify it
                {"\n"}
              </Text>
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.iconContainer1}
                onPress={pickImage}
              >
                <IconButton
                  icon="folder-multiple-image"
                  color={Colors.red500}
                  size={23}
                />
                <Text style={styles.iconText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconContainer1}
                onPress={() => navigation.navigate("Camera")}
              >
                <IconButton
                  icon="camera-iris"
                  color={Colors.red500}
                  size={23}
                />
                <Text style={styles.iconText}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },
  titleText: {
    fontSize: FONT_BACK_LABEL,
    fontWeight: "bold",
    lineHeight: 35,
  },
  container: {
    flex: 1,
  },
  image1: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    flex: 1.8,
    padding: 7,
  },
  container2: {
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 2,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
    paddingLeft: "5%",
    paddingRight: "10%",
    backgroundColor: "#FFFAFA",
    borderRadius: 20,
    margin: 5,
  },
  iconText: {
    fontSize: 23,
  },
});

export default HomeScreen;
