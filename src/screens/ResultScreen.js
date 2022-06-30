import React from "react";
import { Text, View, StatusBar, Image ,StyleSheet} from "react-native";
import { PixelRatio } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
let siz = PixelRatio.get();
let FONT_BACK_LABEL = 23;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 18;
}
const ResultScreen = ({result,photo}) => {
  console.log(photo)
  return (
    <View style={{flexDirection:'row'}}>

    <View style={styles.container1}>
      <StatusBar
        animated={true}
        backgroundColor="#0d0d0d"
        barStyle="light-content"
        showHideTransition="slide"
      />
            <Image
        source={{uri:`${photo.uri}`}}
        style = {{ width: siz*145, height: siz*200 }}
      />
      <View>
      <LinearGradient
          // Background Linear Gradient
          colors={["rgb(44,44,44)", "rgb(0,0,0)"]}
          style={styles.container1}
        >
     {(()=> {switch (result){

        case '0': return <Text style={styles.titleText}>Speed limit 20km/h</Text>
                
        case '1': return <Text style={styles.titleText}>Speed limit 30km/h</Text>
                
        case '2': return <Text style={styles.titleText}>Speed limit 50km/h</Text>
                
        case '3': return <Text style={styles.titleText}>Speed limit 60km/h</Text>
                
        case '4': return <Text style={styles.titleText}>Speed limit 70km/h</Text>
                
        case '5': return <Text style={styles.titleText}>Speed limit 80km/h</Text>
                
        case '6': return <Text style={styles.titleText}>End of speed limit 80km/h</Text>
                
        case '7': return <Text style={styles.titleText}>Speed limit 100km/h</Text>
                
        case '8': return <Text style={styles.titleText}>Speed limit 120km/h</Text>
                
        case '9': return <Text style={styles.titleText}>No passing</Text>
                
        case '10':return <Text style={styles.titleText}>No passing for vehicles over 3.5 metric tons</Text>             
                
        case '11':return <Text style={styles.titleText}>Right-of-way at the next intersection</Text>             
                
        case '12':return <Text style={styles.titleText}>Priority road</Text>             
                
        case '13':return <Text style={styles.titleText}>Yield</Text>             
                
        case '14':return <Text style={styles.titleText}>Stop</Text>             
                
        case '15':return <Text style={styles.titleText}>No vehicles</Text>             
                
        case '16':return <Text style={styles.titleText}>Vehicles over 3.5 metric tons prohibited</Text>             
                
        case '17':return <Text style={styles.titleText}>No entry</Text>             
                
        case '18':return <Text style={styles.titleText}>General caution</Text>             
                
        case '19':return <Text style={styles.titleText}>Dangerous curve to the left</Text>             
                
        case '20':return <Text style={styles.titleText}>Dangerous curve to the right</Text>             
                
        case '21':return <Text style={styles.titleText}>Double curve</Text>             
                
        case '22':return <Text style={styles.titleText}>Bumpy road</Text>             
                
        case '23':return <Text style={styles.titleText}>Slippery road</Text>             
                
        case '24':return <Text style={styles.titleText}>Road narrows on the right</Text>             
                
        case '25':return <Text style={styles.titleText}>Road work</Text>             
                
        case '26':return <Text style={styles.titleText}>Traffic signals</Text>             
                
        case '27':return <Text style={styles.titleText}>Pedestrians</Text>             
                
        case '28':return <Text style={styles.titleText}>Children crossing</Text>             
                
        case '29':return <Text style={styles.titleText}>Bicycles crossing</Text>             
                
        case '30':return <Text style={styles.titleText}>Beware of ice/snow</Text>             
                
        case '31':return <Text style={styles.titleText}>Wild animals crossing</Text>             
                
        case '32':return <Text style={styles.titleText}>End of all speed and passing limits</Text>             
                
        case '33':return <Text style={styles.titleText}>Turn right ahead</Text>             
                
        case '34':return <Text style={styles.titleText}>Turn left ahead</Text>             
                
        case '35':return <Text style={styles.titleText}>Ahead only</Text>             
                
        case '36':return <Text style={styles.titleText}>Go straight or right</Text>             
                
        case '37':return <Text style={styles.titleText}>Go straight or left</Text>             
                
        case '38':return <Text style={styles.titleText}>Keep right</Text>             
                
        case '39':return <Text style={styles.titleText}>Keep left</Text>             
                
        case '40':return <Text style={styles.titleText}>Roundabout mandatory</Text>             
                
        case '41':return <Text style={styles.titleText}>End of no passing</Text>             
                
        case '42':return <Text style={styles.titleText}>End of no passing by vehicles over 3.5 metric tons</Text>
                
        default:return <Text style={styles.titleText}>Loading...</Text>}
     })()}
        </LinearGradient>

</View>        
    </View></View>
  )
}
const styles = StyleSheet.create({
    container1:
    {
      height:'100%'
    },
    titleText: {
        paddingTop:30,
        color:'white',
        fontSize: FONT_BACK_LABEL,
        fontWeight: "bold",
        lineHeight: 35,
        textAlign:'center'
      },
});
export default ResultScreen;
