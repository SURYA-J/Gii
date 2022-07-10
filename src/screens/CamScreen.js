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
import Api from "../Components/Api";
import ResultScreen from "./ResultScreen";
import Amplify, { Storage , API } from 'aws-amplify';
import awsconfig from './../aws-exports';
Amplify.configure(awsconfig);
API.configure(awsconfig);

const myAPI = "apic83ac0aa"
const path = '/gii'; 
const CamScreen=()=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [pred,setPred]=useState();
  // const __retakePicture = () => {
  //   setCapturedImage(null);
  //   setPreviewVisible(false);
  //   __startCamera();
  // };
const Api=async(fileData)=>{
  let result
        
          result =await Storage.put(fileData.uri.slice(-40), fileData.base64, {
          contentType: "image/jpg",
        }
        ).then(getGii(fileData.uri.slice(-40)))
      };
const getGii= (data)=> {
         
  const giiId=data
  API.get(myAPI, path + "/" + giiId)
     .then(response => {
       console.log(response)
      setPred(response)
     })
     .catch(error => {
       console.log(error)
     })
    }
  const width = Dimensions.get("window").width;
  let height = (4 * width) / 3;
  const CameraPreview = ({ photo }) => {
    Api(photo)
    return (
      <View>
        <ResultScreen result={pred} photo={photo}/>
      </View>
    );
  };
  const __takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    if (!camera) return;
    const photo = await camera.takePictureAsync(options);
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
  return (
    <>
      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          // /*savePhoto={__savePhoto}*/ retakePicture={__retakePicture}
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
              type={CameraType.back}
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
        </View>
      )}
    </>
  );
}

export default CamScreen;