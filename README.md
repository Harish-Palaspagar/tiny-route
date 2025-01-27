# TinyRoute

TinyRoute is a modern URL shortening platform designed for effortless sharing, robust analytics, and enhanced security. This project features a React-based frontend, a Spring Boot backend, and a PostgreSQL database. The deployment leverages Docker, Render, Neon PostgreSQL, and Netlify.

## Features

- **URL Shortening**: Generate short and memorable URLs.
- **Analytics**: Track clicks, geographical data, and referral sources.
- **Security**: Advanced encryption ensures data protection.
- **Performance**: Lightning-fast redirects and high uptime.

## Live Demo

Check out the live version here: [TinyRoute](https://bright-hotteok-675e52.netlify.app/)

---

## Technologies Used

### Frontend
- **Framework**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: [Netlify](https://www.netlify.com/)

### Backend
- **Framework**: Spring Boot
- **Database**: Neon PostgreSQL
- **Containerization**: Docker
- **Deployment**: [Render](https://render.com/)

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Java (JDK 17 or higher)
- Docker
- PostgreSQL

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the project using Maven:
   ```bash
   ./mvnw clean install
   ```
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Docker Setup
For containerized deployment:
1. Build the Docker image:
   ```bash
   docker build -t tinyroute-backend .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:8080 tinyroute-backend
   ```

---

## Deployment

### Frontend Deployment on Netlify
1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to Netlify.

### Backend Deployment on Render
1. Push the Docker image to a container registry (e.g., Docker Hub).
2. Configure Render to pull the Docker image for deployment.

### Database on Neon PostgreSQL
1. Set up a Neon PostgreSQL database instance.
2. Update the Spring Boot application properties with the database credentials.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements
- [Netlify](https://www.netlify.com/) for frontend hosting
- [Render](https://render.com/) for backend deployment
- [Neon PostgreSQL](https://neon.tech/) for database services
