// widget.js

document.getElementById('try-on-button')?.addEventListener('click', function() {
  // Open a new popup window
  const popup = window.open('', '', 'width=400,height=400');
  
  // Add content to the popup window
  popup.document.write('<h1>Zelig Widget</h1>');
  popup.document.write('<button id="add-to-bag">Add to Bag</button>');
  
  // Add functionality to the "Add to Bag" button in the popup
  popup.document.getElementById('add-to-bag')?.addEventListener('click', function() {
    alert('Item added to the bag!');
  });
});

