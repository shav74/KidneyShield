# KidneyShield

## Author - J A S Silva (10820285)

## Installation

To run KidneyShield locally, follow these steps:

1. **Clone the repository**
 - clone the github repository with - `git clone https://github.com/shav74/KidneyShield.git`

2. **Install dependencies**
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Anaconda](https://www.anaconda.com/products/distribution)

3. **Client setup**
- Change to the client directory: `cd client`
- Install dependencies: `npm install`
- Start the client: `npm run dev`

4. **Server setup**
- Open a new terminal
- Change to the server directory: `cd server`
- Install dependencies: `npm install`
- Start the server: `npm start`

5. **Admin setup**
- Open a new terminal or integrated terminal inside your IDE
- Change to the admin directory: `cd admin`
- Install dependencies: `npm install`
- Start the admin server: `npm run dev`

6. **API setup**
- Open Anaconda Navigator
- Create a new environment with Python 3.9.19
- Open a terminal inside the new environment
- Install dependencies: `pip install fastapi uvicorn pydantic pickle5 scikit-learn numpy`
- Change to the ML Model directory: `cd "absolute path to ML Model Folder"`
- Start the API: `uvicorn model_api:app`
- importatnt: API should be running on port 8000 to acces. if 8000 is accupied please reallocate the port to the API

After following these steps, you should have three running servers for the client, admin, and server, as well as the machine learning model API.

## Accessing the web app
open `http://localhost:{PORT}/` on your browser. (client siede port number is 5173 by default. otherwise you can find it in the client terminal)

## License

KidneyShield is released under the [MIT License](LICENSE).

## Documentations

- [FastAPI](https://fastapi.tiangolo.com/) - Modern, fast (high-performance), web framework for building APIs with Python
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Scikit-learn](https://scikit-learn.org/) - Machine learning library for Python
- [Numpy](https://numpy.org/) - Python library for numerical computing
