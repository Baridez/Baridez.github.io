// Initialize Contentful client with your space ID and access token
const client = contentful.createClient({
    space: 'etv5xv9is75t',
    accessToken: 'OZDk5-dsminXLHc_w_PcGmEVOTsjpviYVsNEOsZ13OA' // Using the Content Delivery API token
  });
  
  // Function to load the specific post with ID '2RfYCb9E7usPwYKieHRlSj' when the button is clicked
  function loadPost() {
    client.getEntry('2RfYCb9E7usPwYKieHRlSj')
      .then((entry) => {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear previous content
        const post = document.createElement('div');
        post.innerHTML = `<h2>${entry.fields.title}</h2><p>${entry.fields.content}</p>`;
        contentDiv.appendChild(post);
      })
      .catch(console.error);
  }
  