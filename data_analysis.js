const data_analyze = async () =>{

//GET f(x)
const get_data = async () => {
    try {
      const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?email=praanav.999@gmail.com");
  
      
        const data = await response.json(); // Parse the response JSON
        const headers = response.headers.get('x-assignment-id');
        // console.log( "unique-id:"+headers);
        //  console.log(data); 
        return {data ,headers} ;
          } catch (error) {
      console.log("Error: " + error);
    }
  };

  //calling GET f(x)
  const {data, headers} = await get_data();
  
  //Analyzing logic f(x)
  const analyzeData = async (data) => {
   
     // creating object for counting array strings
      const analysis = {}; 
      let mostRepeated = "";
      let maxFrequency = 0;
  
      //looping and increment string value if it is repeating
       data.forEach((str) => {
        if (analysis[str]) {
           analysis[str]++;
        } else {
          analysis[str] = 1;
        }
  
        if (analysis[str] > maxFrequency) {
          mostRepeated = str;
          maxFrequency = analysis[str];
        }
      });
  
      console.log("most repeated string: " + mostRepeated);
    //   console.log(analysis);
  
      return mostRepeated;
    
  };
  //calling analyzing f(x)
  const word = await analyzeData(data) ;
  
  //POST f(x)
const post_data =  async (word , headers) => {
    

   const data ={
       
        assignment_id :headers,
        answer : word ,  
    };

    try{
        const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?email=praanav.999@gmail.com",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(data),
        })

        if(!response.ok){
            console.log("error:"+ response.status);

        }

        const secret = await response.text();
        console.log("secret:"+ secret);
        return secret ;
    }
    catch(error) {
        console.log(error);

    }
}
//calling POST f(x)
 post_data(word ,headers);


}

data_analyze();
