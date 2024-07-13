# Jobify - Job Tracking App
- Developed a comprehensive job tracking web app with user authentication via **JWT tokens** and **HTTP-only cookies**. Utilized **React Query** for efficient **data caching** and included **pagination** for seamless navigation. Implemented a **RESTful API** for backend communication.
- Enabled **user account management**, including **profile picture upload**, **job modification**, and **sorting** functions. Implemented **data visualization** with **interactive charts**. **Deployed** securely on **Render** for cloud-based access.
- **Technologies Used:** [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React.js](https://react.dev/), [Node.js](https://nodejs.org/en), [Vite](https://vitejs.dev/), [Render](https://render.com/)
  
#### Complete App

[Jobify](https://jobify-mern-project-ugah.onrender.com)

### Usage
1. Clone the repository
   
   ```sh
   git clone https://github.com/Rashed112/Jobify-MERN-Project.git
   ```

2. Install dependencies

   ```sh
   cd jobify
   npm run setup-production-app 
   ```

3. Set up environment variables: To run the application locally or deploy it elsewhere, you need to set up the following environment variables in a `.env` file at the root of the project. Here's how to fill in each variable:

    - `NODE_ENV`: Set the environment to either `development` or `production`.
    - `PORT`: Define the port number on which the server will run. Here default is `5100`.
    - `MONGO_URL`: Provide the connection string to your MongoDB database. Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB credentials.
    - `JWT_SECRET`: Choose a secret key for JSON Web Token (JWT) encryption.
    - `JWT_EXPIRES_IN`: Set the expiration time for JWT tokens.
    - `CLOUD_NAME`: Your cloud storage provider's name (e.g., Cloudinary).
    - `CLOUD_API_KEY`: Your cloud storage API key.
    - `CLOUD_API_SECRET`: Your cloud storage API secret.
    
    Here's an example `.env` file:
    
    ```plaintext
    NODE_ENV=development
    PORT=5100
    MONGO_URL=mongodb+srv://<username>:<password>@cluster0.a3mftk7.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=your_secret_key
    JWT_EXPIRES_IN=1d
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_cloud_api_key
    CLOUD_API_SECRET=your_cloud_api_secret
    ```

4. Run the application:

   ```sh
   node server
   ```

5. Access the application in your browser at `http://localhost:5100`.

### Acknowledgement
To learn more about the technologies used and the project, I'll be glad to share the following course which was instructed by [John Smilga](https://johnsmilga.com/) amazingly and was a great help to me:
- [MERN 2024 Edition - MongoDB, Express, React and NodeJS](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/?couponCode=ST2MT43024)
