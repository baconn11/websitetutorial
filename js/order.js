



const submitButton = document.querySelector('.btn');
const popup= document.querySelector('.popup');
const okButton = document.querySelector('#ok');

submitButton.addEventListener('click', event => {
  // Get the values of the input fields
  const name = document.querySelector('input[placeholder="Enter your name"]').value;
  const phone = document.querySelector('input[placeholder="Enter Your Phone Number"]').value;
  const food = document.querySelector('input[placeholder="Enter food name "]').value;
  const extraFood = document.querySelector('input[placeholder="Extra with food"]').value;
  const orderCount = document.querySelector('input[placeholder="how many order"]').value;
  const date = document.querySelector('input[type="datetime-local"]').value;
  const address = document.querySelector('textarea[placeholder="enter your address"]').value;
  const extraRequests = document.querySelector('textarea[placeholder="add if you have any another request"]').value;

  // Save the form data to a file

  const form = document.getElementById('order-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the form from being submitted
  
    const inputs = this.querySelectorAll('input');
    let isValid = true;
  
    // loop through all input fields and check if they are filled
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        isValid = false;
        break;
      }
    }
  
    if (isValid) {
      // all input fields are filled, save the form data
      saveToFile({ name, phone, food, extraFood, orderCount, date, address, extraRequests });
      popup.style.display = 'block';
    } else {
      // at least one input field is empty, show an error message
      alert('Please fill all input fields before submitting the form.');
    }
  });
  
 
});

function saveToFile(data) {
    // Create a blob (binary large object) from the data
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  
    // Create a download link for the file
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

 // click on ok button the pop up display none 
  okButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
  
  
  
  


 