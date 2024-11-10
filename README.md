# Ergast

This project is a React application that uses TypeScript, Vite, Redux, and React Query to display information about racing seasons and races. It includes features such as pinning races, viewing race details, and performance charts.

## Table of Contents

- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technical Approach](#technical-approach)
- [Architectural Decisions](#architectural-decisions)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/ergast.git
   cd ergast
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Using yarn:

   ```sh
   yarn install
   ```

## Running the Project

1. **Start the development server:**

   Using npm:

   ```sh
   npm run dev
   ```

   Using yarn:

   ```sh
   yarn dev
   ```

   This will start the Vite development server and you can view the application at `http://localhost:3000`.

2. **Build the project:**

   Using npm:

   ```sh
   npm run build
   ```

   Using yarn:

   ```sh
   yarn build
   ```

   This will create a production-ready build of the application in the `dist` directory.

3. **Run tests:**

   Using npm:

   ```sh
   npm run test
   ```

   Using yarn:

   ```sh
   yarn test
   ```

   This will run the Jest test suite.

## Project Structure

```
ergast/
├── src/
│   ├── features/                  # Feature-based directories
│   │   ├── Races/                 # Races feature
│   │   │   ├── ...                # Components, hooks, for Races feature
│   │   │   ├── slice.ts           # Redux slice for managing races state
│   │   │   ├── services.ts        # API services
│   │   │   ├── types.ts           # TypeScript types for races
│   │   │   ├── tests/             # Tests for Races feature
│   │   ├── RaceDetails/           # Race details feature
│   │   │   ├── ...                # Components, hooks, for RaceDetails feature
│   │   │   ├── types.ts           # TypeScript types for race details
│   │   │   ├── services.ts        # API services
│   │   │   ├── tests/             # Tests for RaceDetails feature
│   │   ├── Seasons/               # Seasons feature
│   │   │   ├── ...                # Components, hooks, for Seasons feature
│   │   │   ├── slice.ts           # Redux slice for managing seasons state
│   │   │   ├── types.ts           # TypeScript types for race details
│   │   │   ├── services.ts        # API services
│   │   │   ├── tests/             # Tests for Seasons feature
│   ├── pages/                     # Page components for routing
│   │   ├── Home.tsx               # Home page component
│   │   ├── SeasonDetails.tsx      # Season details page component
│   │   ├── RaceDetails.tsx        # Race details page component
│   ├── shared/                    # Shared components and utilities
│   ├── store/                     # Redux store configuration
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Entry point of the application
│   ├── index.css                  # Global CSS styles
├── .gitignore                     # Git ignore file
├── jest.config.cjs                # Jest configuration
├── package.json                   # Project dependencies and scripts
├── README.md                      # Project documentation
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json              # TypeScript configuration for the app
├── tsconfig.node.json             # TypeScript configuration for Node.js
├── vite.config.ts                 # Vite configuration
```

## Technical Approach

The project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Redux**: A state management library for JavaScript applications.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Material-UI**: A popular React UI framework.
- **Chart.js**: A JavaScript library for creating charts.

## Architectural Decisions

1. **State Management**: The application uses Redux for state management. The state is divided into slices, each responsible for a specific part of the application state. The `pinnedRaces` slice manages the state of pinned races, while the `seasons` slice manages the state of racing seasons.

2. **Data Fetching**: React Query is used for data fetching and caching. This allows for efficient and declarative data fetching, as well as automatic caching and background updates.

3. **Component Structure**: The application is divided into feature-based directories. Each feature directory contains components, hooks, and other related files. For example, the `Races` feature contains components for displaying race cards and lists, as well as hooks for managing race-related state.

4. **Styling**: The application uses Material-UI for styling. This provides a consistent and modern look and feel, as well as a set of pre-built components that can be easily customized.

5. **Testing**: The application uses Jest for testing. Unit tests are written for individual components and hooks, while integration tests are used to test the interaction between different parts of the application.

6. **Routing**: React Router is used for client-side routing. The application has routes for the home page, season details, and race details.

7. **Persistence**: Redux Persist is used to persist the Redux state across page reloads. This ensures that the state of pinned races is preserved even when the user refreshes the page.

## License

This project is licensed under the MIT License.
