// widget.js

document.getElementById('try-on-button')?.addEventListener('click', function () {
   // Open a new popup window
   const popup = window.open('', '', 'width=400,height=400');

   if (popup) {
      // Set up the full HTML structure in the popup
      popup.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWB4K4NZ');</script>
<!-- End Google Tag Manager -->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Popup Widget</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f9f9f9;
              }
            </style>
          </head>
          <body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWB4K4NZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
       	  </body>
          </html>
    `);  // document.write end
      popup.document.close(); // Ensure the popup renders correctly
    } else {
        alert('Popup blocked by the browser. Please enable popups.');
    }

    // Add content to the popup window
    popup.document.write('<h1>Zelig Widget</h1>'); popup.document.write('<button id="add-to-bag">Add to Bag</button>');

    // Add functionality to the "Add to Bag" button in the popup
    popup.document.getElementById('add-to-bag')?.addEventListener('click', function () {
    alert('Item added to the bag!');
});
});
