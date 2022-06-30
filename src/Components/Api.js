import Amplify, { Storage , API } from 'aws-amplify';
import awsconfig from './../aws-exports';
Amplify.configure(awsconfig);
API.configure(awsconfig);

const myAPI = "apic83ac0aa"
const path = '/gii'; 

const Api=async(fileData)=>{
  let result
        console.log("jollo");
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
     })
     .catch(error => {
       console.log(error)
     })
    }
export default Api