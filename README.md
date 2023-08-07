# Art Gallery Website

This project is an online art gallery platform where artists can create accounts, upload their artwork, showcase their creations through individual gallery pages, and interact with each other's artworks.

## Technologies

The Art Gallery Website is built with:
- Frontend: React, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Testing: Jest, Supertest
- Building: Gulp

## Features

- User Registration and Login: Users can create their own accounts and log in to access personalized features.
- Artwork Submission: Users can upload their artwork to the platform, providing a title, description, and image file.
- User Gallery Pages: Each user has a personal gallery page where their submitted artworks are displayed.
- Artwork Detail View: Users can click on an artwork to view its details, including the title, description, and image.
- User Account Management: Users can view and update their account information.
- Artwork Interaction: Users can delete and edit their own artworks.
- Image Handling: The application handles image file uploads and displays the uploaded images in the gallery.
- User Authentication: The application securely handles user sessions and authentication, allowing for personalized experiences and secure data handling.
- Responsive Design: The application is designed to be responsive and can be used on various screen sizes and devices.

## Installation & Usage

### Prerequisites
- Node.js (version 14 or later)
- MongoDB

### Setup

Clone the repository:
```bash
git clone git@github.com:antonhibl/ArtGallery-CS312.git
cd ArtGallery-CS312
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root of your project folder and add your MongoDB connection string and a port to host on:

```makefile
DB_CONNECTION=<Your MongoDB connection string>
PORT=<port to use>
```

Start the server:

```bash
npm start
```

Your app should now be running on localhost:3000.(or whatever port you chose)

### Project Structure

```
ArtGallery-CS312/
├─ client/             # React client
│  ├─ src/
│  │  ├─ components/   # UI components
│  │  │   ├─ Home.js   # Home page
│  │  │   ├─ Navbar.js # Navbar
│  │  │   ├─ GalleryPage.js # Gallery page
│  │  │   ├─ ArtworkCard.js # Artwork card component
│  │  │   ├─ ArtworkDetail.js # Artwork detail component
│  │  │   └─ UserAccount.js # User account component
│  │  ├─ App.js        # App component
│  │  └─ index.js      # React entry point
├─ server/             # Node.js/Express server
│  ├─ api/             # Route definitions
│  │  ├─ register.js   # User registration
│  │  ├─ login.js      # User login
│  │  └─ gallery.js    # Artwork gallery
│  ├─ models/          # Database models
│  │  ├─ User.js       # User schema
│  │  └─ Artwork.js    # Artwork schema
│  ├─ middleware/      # Middleware functions
│  │  └─ verifyTokens.js # Token verification
│  └─ server.js        # Server entry point
├─ .env                # Environment variables
├─ package.json        # Dependencies and scripts
├─ README.md           # This file
├─ gulpfile.js         # gulp tasks file
├─ jest.config.server.js # jest server tests config file
├─ LICENSE             # the license
└─ .gitignore          # Files and directories to be ignored by git
```

### Project Evolution

Sure, here's a more detailed project evolution section:

## Project Evolution

The project began with a proposal to create an art gallery application using Python and the Tkinter library. The initial idea was to allow users to view, search, and sort artworks, with the artworks' data stored in a SQLite database. The proposal also mentioned the use of the Pillow library for image processing and the implementation of a user-friendly GUI.

As the project moved into the detailed planning phase, the team decided to shift the technology stack to a MERN stack (MongoDB, Express, React, Node.js). The database schema was outlined, which included tables for Artists, Artworks, and Users. The plan also outlined the functionality of the application, such as the ability to add and remove artworks, search for artworks, and sort artworks based on different criteria. The plan also mentioned the use of the Model-View-Controller (MVC) design pattern.

During the first phase of the project, the team focused on setting up the database and implementing the MVC design pattern. The basic GUI was created, and the team faced some challenges with the Tkinter library and needed to do additional research on MVC. By the end of this phase, the team had a functioning application with a basic GUI and a working database.

In the second phase, the team completed the GUI and implemented the artwork viewing, searching, and sorting functionalities. The team also began testing the application and found and fixed several bugs. The team learned valuable lessons about software development and testing during this phase.

As the project moved into its final stages, the team expanded the application's functionalities to include user registration and login, artwork submission, user gallery pages, artwork detail view, user account management, and artwork interaction. The application also implemented image handling, user authentication, and responsive design. The team faced challenges with image handling and user authentication but was able to overcome these challenges and create a fully functioning art gallery application.

Throughout the project, the team learned valuable lessons about software development, including the importance of thorough planning, the benefits and challenges of different technology stacks, and the importance of testing and debugging.

### Contributing

This project is open for contributions. Here are steps to follow:

  -  Fork this repository
  -  Create your feature branch: git checkout -b feature/your-new-feature
  -  Commit your changes: git commit -m 'Add some feature'
  -  Push to the branch: git push origin feature/your-new-feature
  -  Submit a pull request

Please make sure your code has proper comments explaining what your feature is supposed to do.

### Authors

   - Anton Hibl
   - Ethan Wilcox

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
