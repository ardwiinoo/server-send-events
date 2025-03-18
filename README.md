# Server-Sent Events (SSE) Concept

Server-Sent Events (SSE) allow servers to push real-time notifications to web clients over HTTP. This project demonstrates a basic SSE implementation

```plaintext
+-------------+       Event Stream       +--------------+
|             | -----------------------> |              |
|   Server    |                          |   Browser    |
|             | <----------------------- |              |
+-------------+       HTTP Request       +--------------+
```

1. **Server**: Sends real-time updates to the client
2. **Browser**: Listens for incoming events and processes them to update the UI

## Advantages

-   Simple & Resource Efficient (Lightweight)
-   Native in Browser
-   Suitable for One-way Notification

## Prerequisites

-   Node.js (for Backend)
-   Live Server (Extension for Frontend)
-   A modern web browser that supports SSE (e.g., Google Chrome, Firefox, Safari, Microsoft Edge, etc.)

## Installation

Clone the repository:

```bash
git clone https://github.com/ardwiinoo/server-send-events
```

Navigate to the project directory

```bash
cd ./server-send-events
```

Install dependencies:

```bash
cd ./backend
```

```bash
pnpm install
```

## Running the Project

-   To run the **frontend**, use `Live Server`
-   To run the **backend**, use the `pnpm run dev` command in the terminal
