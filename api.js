var addedOptions = [];
const dropdown = document.getElementById('myDropdown');

function myFunction() {
  // alert("hii");
  fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/countries')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      data = data.data
      // Check the response structure and handle accordingly
      if (Array.isArray(data)) {
        // console.log("in array");
        // If the response is an array of objects
        data.forEach(item => {
          var optionValue = item.name;
          if (!addedOptions.includes(optionValue)) {
            const option = document.createElement('option');
            option.value = item.id;
            option.text = item.name;
            dropdown.appendChild(option);

            //added in options
            addedOptions.push(item.name);
          }

        });
      } else if (typeof data === 'object') {
        // If the response is an object with key-value pairs
        // console.log("object");
        // console.log(data);
        for (const key in data) {
          const option = document.createElement('option');
          option.value = key;
          option.text = data[key];
          dropdown.appendChild(option);
        }
      } else {
        throw new Error('Invalid response from API');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
const dropForState = document.getElementById('myDropdownforstate');
var addedOptionsforState = [];
function forStates() {
  var selectedOption = $("#myDropdown option:selected").text();
  var selectedValue = $('#myDropdown').find(":selected").val();
  // console.log(selectedOption + "**" + selectedValue);
  fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/states')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      data = data.data
      // Check the response structure and handle accordingly
      if (Array.isArray(data)) {
        console.log("in array");

        // If the response is an array of objects
        data.forEach(item => {
          // console.log(item);
          var optionValue = item.name;
          if (!addedOptionsforState.includes(optionValue)) {
            if (item.country_id == selectedValue) {
              const option = document.createElement('option');
              option.value = item.id;
              option.text = item.name;
              dropForState.appendChild(option);
            }
            addedOptionsforState.push(item.name);
          }
        });
      } else if (typeof data === 'object') {
        // If the response is an object with key-value pairs
        // console.log("object");
        // console.log(data);
        for (const key in data) {
          const option = document.createElement('option');
          option.value = key;
          option.text = data[key];
          dropdown.appendChild(option);
        }
      } else {
        throw new Error('Invalid response from API');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const dropForCity = document.getElementById('myDropdownForcity');
var addedOptionsforCity = [];
function forCity() {
  var selectedOption1 = $("#myDropdownforstate option:selected").text();
  var selectedValue1 = $('#myDropdownforstate').find(":selected").val();
  // console.log(selectedOption1 + "**" + selectedValue1);
  fetch('https://d32sbion19muhj.cloudfront.net/pub/interview/cities')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      data = data.data
      // Check the response structure and handle accordingly
      if (Array.isArray(data)) {
        console.log("in array");

        // If the response is an array of objects
        data.forEach(item => {
          // console.log(item);
          var optionValue = item.name;
          if (!addedOptionsforCity.includes(optionValue)) {
                  //  console.log("hi");
            if (item.state_id == selectedValue1) {
              const option = document.createElement('option');
              option.value = item.id;
              option.text = item.name;
              dropForCity.appendChild(option);
            }
            addedOptionsforCity.push(item.name);
          }
          
        });
      } else if (typeof data === 'object') {
        // If the response is an object with key-value pairs
        // console.log("object");
        // console.log(data);
        for (const key in data) {
          const option = document.createElement('option');
          option.value = key;
          option.text = data[key];
          dropdown.appendChild(option);
        }
      } else {
        throw new Error('Invalid response from API');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

}
//on change
function myFunctionchange() {
  // $("#myDropdown").html("");
  $("#myDropdownforstate").html("");
  $("#myDropdownForcity").html("");
  addedOptionsforCity=[];
  addedOptionsforState=[];

}

function myFunctionchangeForState(){
  $("#myDropdownForcity").html("");
  addedOptionsforCity=[];
}