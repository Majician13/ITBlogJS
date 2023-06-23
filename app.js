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
    const title = 'Microsoft Ignoring Default Browser: How to Resolve the Issue';
    const article = 'Title: Microsoft Ignoring Default Browser: How to Resolve the Issue

    Introduction:
    Microsoft has been under scrutiny recently for its handling of default web browsers on Windows operating systems. Many users have reported that Microsoft applications, such as Outlook and Teams, ignore their chosen default browser settings and instead open links in Microsoft Edge. This behavior can be frustrating for users who prefer to use a different browser. In this blog post, we will explore this issue, discuss the implications, and provide a step-by-step resolution to ensure your default browser preferences are respected.
    
    The Problem:
    Microsoft's decision to override users' default browser settings has raised concerns among many individuals. When clicking on links within Microsoft applications, the links are automatically opened in Microsoft Edge, even if users have set a different browser as their default choice. This behavior has led to a loss of productivity, inconvenience, and frustration for users who rely on alternative browsers for their web browsing needs.
    
    Understanding the Implications:
    Ignoring default browser settings can disrupt users' workflows and create a disjointed experience. Users may have customized their preferred browser with extensions, bookmarks, and personalized settings, only to find their efforts undermined when Microsoft applications disregard their choices. This behavior not only diminishes user autonomy but also limits the ability to seamlessly integrate different tools and services.
    
    Resolving the Issue:
    Thankfully, there is a solution to ensure that your default browser settings are respected by Microsoft applications. Follow the steps below to make the necessary adjustments:
    
    Step 1: Open the Microsoft Application:
    Launch the Microsoft application in which you are experiencing the issue, such as Outlook or Teams.
    
    Step 2: Navigate to File:
    Click on the "File" option located at the top-left corner of the application's window. A drop-down menu will appear.
    
    Step 3: Access Options:
    Within the drop-down menu, locate and select the "Options" or "Settings" entry. This will open the application's settings panel.
    
    Step 4: Open Advanced Settings:
    Look for an "Advanced" or "Advanced Settings" section within the application's settings panel. Click on it to access advanced configuration options.
    
    Step 5: Locate Link Handling:
    Within the Advanced Settings, search for the "Link handling" or similar option. This setting determines how the application handles links.
    
    Step 6: Adjust the Default Browser Setting:
    In the Link handling section, you will find a drop-down box or switch related to the default browser. Change the current selection to "Default Browser" or the equivalent option that respects your system's default browser choice.
    
    Step 7: Save and Apply Changes:
    Once you have made the necessary adjustment, save the settings and exit the options or settings panel.
    
    Conclusion:
    By following the steps outlined above, you can ensure that Microsoft applications respect your default browser settings and open links in your preferred browser. Taking control of your browsing experience enhances productivity and enables you to leverage the features and extensions provided by your chosen browser. While the buried nature of this option may be frustrating, knowing how to navigate the settings empowers you to customize your Microsoft applications according to your preferences.
    
    Remember, it's essential to stay informed about updates and changes in software settings to maintain control over your digital environment. Microsoft's decision to bury the default browser option may reflect the company's desire to promote their own products, but users have the right to choose their preferred tools and should have the ability to do so easily.
    
    Keep exploring and customizing your digital experience to make the most of the technology at your fingertips.';
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
