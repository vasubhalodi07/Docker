# Redis & Node.js

This project demonstrates a simple setup using Docker to containerize a Node.js application with Redis as the database. It includes a Dockerfile for the Node.js application and a docker-compose.yml file for managing the containers.

## Prerequisites

Make sure you have Docker installed on your system.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)

## Getting Started

To run the application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/vasubhalodi07/docker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-redis
   ```

3. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

This command will build the Docker images defined in the Dockerfile and docker-compose.yml file, and then start the containers.

## Accessing the Application

Once the containers are up and running, you can access the Node.js application at `http://localhost:8000`.

Additionally, a Redis GUI is available at `http://localhost:8001` for development purposes. Note that this GUI is generally used for development, and in production environments, it may not be necessary.

## Environment Variables

The Node.js application is configured to connect to the Redis database using environment variables. You can modify these variables in the `docker-compose.yml` file if needed.

- `REDIS_HOST`: Set to `redis-stack` to connect to the Redis service within the Docker network.
- `REDIS_PORT`: Default port `6379` is used to connect to the Redis database.

## Docker Compose Configuration

The `docker-compose.yml` file defines two services:

- `node`: Builds the Node.js application image and exposes it on port `8000`.
- `redis-stack`: Uses the `redis/redis-stack` image, exposing Redis on port `6379` and the Redis GUI on port `8001`.

## Cleanup

To stop the containers, use the following command:

```bash
docker-compose down
```
