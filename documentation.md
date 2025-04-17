# Dr. Krista T. Kenney Website Documentation

## Project Overview
This documentation provides information about the website created for Dr. Krista T. Kenney. The website is a responsive, multi-page site designed to showcase Dr. Kenney's professional services, speaking engagements, books, and community resources.

## Project Structure
The website follows a clean, organized structure:

```
krista-kenney-website/
├── assets/
│   ├── favicon/
│   │   └── favicon.svg
│   └── favicon.css
├── css/
│   └── styles.css
├── images/
│   └── [various image files]
├── js/
│   └── main.js
├── pages/
│   ├── about.html
│   ├── books.html
│   ├── community.html
│   ├── contact.html
│   ├── services.html
│   └── speaking.html
├── _redirects
├── index.html
├── netlify.toml
└── package.json
```

## Features
- Responsive design that works on mobile, tablet, and desktop devices
- Semantic HTML structure with accessibility features
- Clean organization with separate directories for CSS, JavaScript, and images
- Netlify deployment configuration
- Mobile-friendly navigation
- Contact forms
- Image optimization

## Pages
1. **Home (index.html)**: Main landing page with hero section, services overview, and call-to-action elements
2. **About**: Information about Dr. Kenney's background, expertise, and approach
3. **Services**: Details about coaching and consulting services offered
4. **Speaking**: Information about speaking engagements and topics
5. **Books**: Showcase of published books and resources
6. **Community**: Resources and signup for Dr. Kenney's community
7. **Contact**: Contact form and information

## Technologies Used
- HTML5
- CSS3 (with responsive design principles)
- JavaScript (for interactive elements)
- Font Awesome (for icons)
- Google Fonts (Cormorant Garamond and Montserrat)

## Deployment Instructions
The website is configured for deployment on Netlify using GitHub integration:

1. **Create a GitHub Repository**:
   - Create a new repository on GitHub
   - Push the website files to the repository

2. **Connect to Netlify**:
   - Log in to Netlify (or create an account)
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Select the repository containing the website

3. **Configure Build Settings**:
   - Build command: Leave empty (or use the one specified in netlify.toml)
   - Publish directory: / (root directory)
   - Click "Deploy site"

4. **Custom Domain (Optional)**:
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow the instructions to set up your domain

## Customization Guide
To customize the website:

### Content Updates
- Edit the HTML files to update text content
- Replace images in the images directory (maintain the same filenames or update references in HTML)

### Style Updates
- Modify the CSS in the css/styles.css file
- The color scheme can be updated by changing the CSS variables at the top of the styles.css file

### Adding New Pages
1. Create a new HTML file in the pages directory
2. Copy the header and footer structure from an existing page
3. Update the navigation links in all pages to include the new page

## Browser Compatibility
The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Accessibility
The website follows accessibility best practices:
- Semantic HTML structure
- ARIA attributes where necessary
- Sufficient color contrast
- Keyboard navigation support
- Alt text for images

## Maintenance
Regular maintenance should include:
- Checking for broken links
- Updating content as needed
- Ensuring all forms are functioning properly
- Reviewing for any security updates needed

## Contact
For questions or support regarding this website, please contact the developer.
