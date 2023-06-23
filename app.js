// Define routes
const express = require('express');
const path = require('path');
const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(process.cwd(), "public")));

// Define routes
app.get('/', function(req, res) {
    const title = 'Welcome to ITBlog';
    const article = 'This is the content of the article.';
    res.render('index', { header: '', footer: '', title: title, article: article });
});
  
// Define dynamic route for articles
app.get('/articles/:title', function(req, res) {
    const title = req.params.title;
    // Retrieve the article content based on the provided title
    // This can be done by fetching the article from a database or any other data source
    
    // Render the blogTemplate.ejs template with the article data
    res.render('blogTemplate', { title: title, article: article });
});

// Add more routes as needed

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
