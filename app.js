const client = contentful.createClient({
    space: 'your_space_id',
    accessToken: 'your_access_token'
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
  