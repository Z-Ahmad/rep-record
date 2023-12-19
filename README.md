# Rep Record

Rep Record is a simple web app for tracking lifting statistics, including bench press, squat, and deadlift. Users can log their sets, reps, and weights for each exercise.

## Features

- **User Authentication:** Log in using your Google account to start tracking your lifts.
- **Lift Tracking:** Record your sets, reps, and weights for bench press, squat, and deadlift.
- **Unit Conversion:** Easily switch between pounds and kilograms for weight tracking.
- **Firebase Integration:** User authentication and lift data storage are handled using Firebase and Firestore.

## Getting Started

1. Clone the repository.
   ```bash
   git clone https://github.com/Z-Ahmad/rep-record
   ```

2. Install dependencies.
   ```bash
   cd rep-record
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your project and replace the Firebase configuration in `src/utils/firebase.js` with your own configuration.
   - Enable Google authentication in the Firebase Console.

4. Run the app locally.
   ```bash
   npm start
   ```

## Usage

- Visit the live site: [Rep Record App](https://rep-record.vercel.app/)
- Log in with your Google account.
- Start tracking your lifts by entering sets, reps, and weights.
