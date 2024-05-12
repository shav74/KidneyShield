KidneyShield
Author - J A S Silva (10820285)
Installation
To run KidneyShield locally, follow these steps:

***********Clone the repository***********
clone the github repository with - git clone https://github.com/shav74/KidneyShield.git

***********Install dependencies***********
Node.js and npm
MongoDB
Anaconda

***********Client setup ***********
Change to the client directory: cd client
Install dependencies: npm install
Start the client: npm run dev

***********Server setup***********
Open a new terminal
Change to the server directory: cd server
Install dependencies: npm install
Start the server: npm start

***********Admin setup***********
Open a new terminal or integrated terminal inside your IDE
Change to the admin directory: cd admin
Install dependencies: npm install
Start the admin server: npm run dev

***********API setup***********
Open Anaconda Navigator
Create a new environment with Python 3.9.19
Open a terminal inside the new environment
Install dependencies: pip install fastapi uvicorn pydantic pickle5 scikit-learn numpy
Change to the ML Model directory: cd "absolute path to ML Model Folder"
Start the API: uvicorn model_api:app

After following these steps, you should have three running servers for the client, admin, and server, as well as the machine learning model API.

Accessing the web app
open http://localhost:{PORT}/ on your browser. (client siede port number is 5173 by default. otherwise you can find it in the client terminal)

License
KidneyShield is released under the MIT License.

Documentations
FastAPI - Modern, fast (high-performance), web framework for building APIs with Python
React - A JavaScript library for building user interfaces
Node.js - JavaScript runtime environment
MongoDB - NoSQL database
Scikit-learn - Machine learning library for Python
Numpy - Python library for numerical computing
