const data_analyze = async () =>{
//GET f(x)
const get_data = async () => {
    try {
      const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?email=praanav.999@gmail.com");
  
      if (response.ok) {
        const data = await response.json(); // Parse the response JSON
        // const headers = response.headers;
        // console.log(data);
        // console.log(headers);
        return data;
      } else {
        console.log("Status error: " + response.status);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  const data = await get_data();

  //Analyzing logic
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
  const word = await analyzeData(data) ;
  
  //POST f(x)
const post_data =  async (word) => {
    

   const data ={
        assignment_id : "6303a714-a639-4675-9b8f-b83c71b801f9",
        answer : word ,  
    };

    try{
        const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?email=praanav.999@gmail.com",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'assignment_id': '6303a714-a639-4675-9b8f-b83c71b801f9',
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
  post_data(word);


}

data_analyze();
