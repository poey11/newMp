"sub": "concurrently \"react-scripts start\" \"npm run dev\"":
This script uses the concurrently package to run two commands concurrently.
The commands being executed are "react-scripts start" and "npm run dev".
this commands doesn't build the product

"start": "npm run build && concurrently \"react-scripts start\" \"npm run dev\"":
This script first runs the command "npm run build".
After the build is complete (due to &&), it concurrently runs "react-scripts start" and "npm run dev".this is for the rendering app to run the frontend

"build": "react-scripts build":
This script runs the build command for a React application using "react-scripts build".
"test": "react-scripts test":

This script runs the tests for a React application using "react-scripts test".

"eject": "react-scripts eject":
This script ejects your project from using react-scripts, exposing the configuration files. Ejecting is a one-way operation.

"dev": "nodemon ./src/server":
This script uses nodemon to watch for changes in files and automatically restarts the Node.js server located in the ./src/server directory.