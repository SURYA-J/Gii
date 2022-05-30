import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function CamScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };
  const width = Dimensions.get("window").width;
  let height = (4 * width) / 3;
  const CameraPreview = ({ photo }) => {
    console.log("sdsfds", photo);
    return (
      <View
        style={{
          flex:1,
          flexDirection:'row',
          backgroundColor:'black',
            paddingBottom:'15%'
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            width: width,
            height: height,
            alignSelf:'center'
          }}
        />
      </View>
    );
  };
  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (<>
{previewVisible && capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            /*savePhoto={__savePhoto}*/ retakePicture={__retakePicture}
          />
        ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flex: 0.1,
          backgroundColor: "black",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        
          <Camera
            style={{ width: width, height: height }}
            ref={(r) => {
              camera = r;
            }}
            type={type}
          >
            <StatusBar
              animated={true}
              backgroundColor="#0d0d0d"
              barStyle="light-content"
              showHideTransition="slide"
            />
          </Camera>

      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          flexDirection: "row",
          backgroundColor: "black",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          onPress={__takePicture}
          style={{
            padding: 5,
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "grey",
          }}
        >
          <TouchableOpacity
            onPress={__takePicture}
            style={{
              padding: 20,
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>        )}
    </>
  );
}
