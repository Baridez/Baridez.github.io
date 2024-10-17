// Initialize Contentful client with your space ID and access token
const client = contentful.createClient({
    space: 'etv5xv9is75t',
    accessToken: 'OZDk5-dsminXLHc_w_PcGmEVOTsjpviYVsNEOsZ13OA' // Using the Content Delivery API token
  });
  
  client.getEntries()
    .then((response) => {
      const contentDiv = document.getElementById('content');
      response.items.forEach((entry) => {
        const post = document.createElement('div');
        post.innerHTML = `<h2>${entry.fields.title}</h2><p>${entry.fields.content}</p>`;
        contentDiv.appendChild(post);
      });
    })
    .catch(console.error);
  