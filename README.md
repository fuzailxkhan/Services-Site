# Trading Company Services Site

This project is a services site for a trading company, designed using the MERN (MongoDB, Express, React, Node.js) stack with TypeScript. It includes user authentication using JWT (JSON Web Tokens), Redux Toolkit for state management, and user picture uploading with Cloudinary.

## Features

- **User Authentication**: Users can sign up and log in to access the site's features.
- **JWT Token**: JWT tokens are used for secure user authentication.
- **Redux Toolkit**: State management is handled using Redux Toolkit.
- **Picture Uploading**: Users can upload pictures, which are saved on Cloudinary.
- **Responsive Design**: The site is designed to be responsive and mobile-friendly.

## Technologies Used

- **Frontend**: React, TypeScript, Redux Toolkit
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Picture Uploading**: Cloudinary

## Setup Instructions

1. Clone the repository: `git clone https://github.com/fuzailxkhan/Services-Site.git`
2. Install dependencies: `cd services-site && npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     REACT_APP_API_URL=http://localhost:5000
     REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
     REACT_APP_CLOUDINARY_API_KEY=your_cloudinary_api_key
     REACT_APP_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```
4. Start the development server: `npm run dev`
5. Open the app in your browser: `http://localhost:3000`

## Deployment

To deploy the app, you can use services like Heroku for the backend and Netlify or Vercel for the frontend. Make sure to set up your environment variables in your deployment environment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
