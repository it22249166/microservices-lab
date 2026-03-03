# Microservices Lab – SE4010 (2026 Semester 1)

## Architecture

- Item Service (Node.js + Express) – Port 8081
- Order Service (Node.js + Express) – Port 8082
- Payment Service (Node.js + Express) – Port 8083
- API Gateway (NGINX) – Port 8080

All services communicate through the API Gateway.

---

## How to Run

```bash
docker compose up --build
