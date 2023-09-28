# Facebook Messenger Integration with OpenAI 

## Description

This Messenger bot is built using Node.js and Express. It integrates with Facebook's Graph API for sending messages and uses OpenAI's GPT-3.5 Turbo for chat completions.

## Features

- Facebook Webhook Verification
- Message Processing
- Logging Middleware
- OpenAI GPT-3.5 Turbo Integration
- Message Sending via Facebook's Graph API

## Installation

### Clone the Repository

```
git clone https://github.com/RaheesAhmed/Messenger.git
```

### Navigate to Project Directory

```
cd Messenger
```
### Install Dependencies

```
npm install openai axios dotenv cors express
```

### Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
PORT=5000
VERIFY_TOKEN=your_verification_token_here
TOKEN=your_facebook_token_here
PAGE_ID=your_page_id_here
OPENAI_API_KEY=your_openai_api_key_here
```

## Usage

### Start the Server

```
npm start
```

### Server Initialization

The server will start on the port specified in the `.env` file (default is 5000).

```
Server is up and running at 5000
```

## API Endpoints

- `GET /`: Home route
- `GET /facebook`: Facebook webhook verification
- `POST /facebook`: Handle incoming messages

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


