# OriginWire Server

This is the Express.js backend server for OriginWire, handling contact form submissions and sending SMS notifications via email-to-text.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the server directory with the following variables:
```
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
SMS_EMAIL=5132227589@vtext.com
PORT=3001
```

### Gmail Configuration

To use Gmail's SMTP server, you'll need to:

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password:
   - Go to your Google Account settings
   - Navigate to Security
   - Under "2-Step Verification", click on "App passwords"
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password as your `GMAIL_APP_PASSWORD`

## Development

Run the development server:
```bash
npm run dev
```

## Production

Build and run the production server:
```bash
npm run build
npm start
```

## API Endpoints

### POST /api/contact
Handles contact form submissions and sends SMS notifications.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

### GET /api/health
Health check endpoint to verify server status. 