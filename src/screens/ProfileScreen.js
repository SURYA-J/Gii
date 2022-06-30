import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import Api from "../Components/Api";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState();

  const pickImage = async () => {
    console.log("hii");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    Api(fileData)
    setFileData(result)
    console.log("resssssssss",result);
    console.log(result.base64);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgb(0,0,0)", "rgb(44,44,44)"]}
      style={styles.container}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
