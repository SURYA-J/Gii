
// https://51pzgyl68b.execute-api.ap-south-1.amazonaws.com/dev/gii/2
exports.handler=async(event)=>{
//     console.log(event)
    const giiId=event.pathParameters.giiId;
    const gii={'giiId':giiId,'giiName':"Gii"+giiId};
    const response={
        statusCode:200,
   // Uncomment below to enable CORS requests
        headers:{
             "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"*"
       },
        body:JSON.stringify(gii),
   };
    return response;
}