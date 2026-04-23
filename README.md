# Secure Credential Drop(Task1)

A secure, one-time secret sharing application that allows users to share sensitive information with expiring, self-destructing links.

## Features

- **End-to-End Encryption**: Secrets are encrypted using AES-256-CBC before storage
- **One-Time Viewing**: Secrets are permanently deleted after being viewed once
- **Time-Based Expiration**: Secrets automatically expire after a configurable time period
- **Bot Protection**: Prevents automated access by blocking common bot user agents
- **Clean UI**: Modern, responsive interface built with Next.js and Tailwind CSS

## Architecture

This application consists of two main components:

### Backend (Node.js/Express)

The backend provides a REST API for creating and retrieving secrets.

#### Key Components:

- **Models/Secret.js**: MongoDB schema for secrets with encrypted text, unique tokens, expiration dates, and burn status
- **Utils/Encryption.js**: AES-256-CBC encryption/decryption utilities
- **Services/SecretServices.js**: Business logic for creating and retrieving secrets
- **Controllers/SecretController.js**: HTTP request handlers
- **Middleware/BotProtection.js**: Blocks requests from bots based on user-agent headers
- **Routes/SecretRoutes.js**: API endpoints

#### API Endpoints:

- `POST /secret/create`: Creates a new secret
  - Body: `{ "text": "secret content", "ttl": 300 }`
  - Returns: `{ "url": "http://localhost:3000/secret/{token}" }`

- `GET /secret/{token}`: Retrieves and burns a secret
  - Returns: `{ "text": "decrypted secret" }` or `{ "message": "Secret expired or already viewed" }`

#### Environment Variables:

- `MONGO_URI`: MongoDB connection string
- `BASE_URL`: Frontend base URL for generating shareable links
- `PORT`: Server port (default: 5000)

### Frontend (Next.js/React)

The frontend provides a user-friendly interface for creating and viewing secrets.

#### Key Components:

- **app/page.tsx**: Main page for creating secrets with form inputs for text and TTL selection
- **app/secret/[token]/page.tsx**: Dynamic page for viewing decrypted secrets
- **services/api.ts**: API client functions for communicating with the backend
- **types/index.ts**: TypeScript interfaces for API responses

#### Features:

- Responsive design with Tailwind CSS
- Real-time form validation
- Copy-to-clipboard functionality
- Loading states and error handling
- Clean, modern UI with Lucide React icons

## Technology Stack

### Backend:
- **Node.js** with **Express.js** framework
- **MongoDB** with **Mongoose** ODM
- **Crypto**: AES-256-CBC encryption
- **CORS**: Cross-origin resource sharing
- **Jest**: Testing framework

### Frontend:
- **Next.js 16** with **React 19**
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd secure-credential-drop
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```
   MONGO_URI=mongodb://localhost:27017/secrets
   BASE_URL=http://localhost:3000
   PORT=5000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if running locally)

2. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Testing

Run backend tests:
```bash
cd backend
npm test
```

## Usage

1. **Creating a Secret**:
   - Enter your sensitive information in the text area
   - Select an expiration time (1 minute to 7 days)
   - Click "Create Secure Link"
   - Copy and share the generated URL

2. **Viewing a Secret**:
   - Click the shared link
   - The secret will be decrypted and displayed
   - The secret is permanently deleted after viewing
   - Attempting to access the same link again will show an error

## Security Considerations

- **Encryption**: Secrets are encrypted at rest using AES-256-CBC
- **Burn After Reading**: Secrets are deleted immediately after being viewed
- **Expiration**: Secrets automatically expire and are cleaned up by MongoDB TTL indexes
- **Bot Protection**: Common bot user agents are blocked from accessing secrets
- **No Authentication**: The system is designed for anonymous use

## Development

### Project Structure

```
/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   └── services/
│   ├── package.json
│   └── types/
└── README.md
```

### Contributing

1. Follow the existing code style and patterns
2. Add tests for new features
3. Update documentation as needed
4. Ensure security best practices are maintained

## License

This project is licensed under the ISC License.</content>
<parameter name="filePath">C:\Users\dhami\Desktop\Task1\README.md

#Image
1.<img width="960" height="897" alt="Screenshot 2026-04-23 153322" src="https://github.com/user-attachments/assets/fa386d12-e960-4c96-bfd2-bed4743e4344" />
2.<img width="1463" height="892" alt="Screenshot 2026-04-23 153544" src="https://github.com/user-attachments/assets/c0445de3-4a30-4416-8dcc-802a7e03798a" />
3.<img width="1791" height="965" alt="Screenshot 2026-04-23 162842" src="https://github.com/user-attachments/assets/e5e87f08-582c-4641-b070-7b27fb804d25" />
4.<img width="1746" height="931" alt="Screenshot 2026-04-23 162920" src="https://github.com/user-attachments/assets/1daadc1f-6afd-413e-9ab4-31a2d9b2973e" />



