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

- User Registration and Login
- Artwork Submission
- User Gallery Pages
- Search and Filtering
- User Interactions (like, comment, share)
- Artwork Detail View
- User Account Management

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
