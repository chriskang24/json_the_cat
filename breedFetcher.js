const request = require('request');
const args = process.argv;

// console.log(process.argv);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`, (error, response, body) => {

  if (error) {
    console.error("error was found");
  } else {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0]["description"]);
    } else {
      console.log(`${args[2]} doesnt exist in our database!`);
    }
  
  
  }

  // console.log(typeof data);

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});