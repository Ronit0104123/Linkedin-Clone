# LinkedIn Clone

A modern LinkedIn clone built with React and Firebase, featuring a responsive design and core LinkedIn functionality.

![LinkedIn Clone Screenshot](public/Screenshot%202024-11-19%20at%2019.30.12.png)

## Features

- 🔐 User Authentication with Firebase
- 📱 Responsive Design
- 📝 Create and Share Posts
- 👥 User Profiles
- 💬 Real-time Updates
- 🔍 Search Functionality
- 🎨 Modern UI with Material-UI

## Technologies Used

- React.js
- Redux Toolkit for State Management
- Firebase (Authentication, Firestore, Storage)
- Material-UI for Styling
- CSS3 for Custom Styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Ronit0104123/Linkedin-Clone.git
cd linkedin-clone
```

2. Install dependencies
```bash
npm install
```

3. Create a Firebase project and add your configuration
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Firestore
   - Add your Firebase configuration to `src/firebase.js`

4. Start the development server
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices and API calls
├── firebase.js     # Firebase configuration
└── App.js         # Main application component
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- LinkedIn for the design inspiration
- Create React App team
- Firebase team
- Material-UI team
