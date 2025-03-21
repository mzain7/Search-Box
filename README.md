# Search Box

## Overview
This project is a search box component built using React with TypeScript and Vite. The goal was to create an efficient, user-friendly search interface that dynamically displays search results as users type. The application follows a modular structure, with reusable components and a clear separation of concerns.

## Technologies Used
- **React** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **use-debounce** for optimizing search input handling
- **ESLint & Prettier** for code quality and consistency

## Thinking Process

1. **Planning the Component Structure**
   - Identified the main components: `SearchBox`, `SearchBar`, `ResultList`, `ResultItem`, and `TagList`.
   - Ensured the components were reusable and followed a clean architecture.

2. **State Management and Hooks**
   - Utilized the `useSearch` custom hook to manage search logic.
   - Implemented controlled input handling for real-time search.
   - Used `use-debounce` to prevent excessive re-renders on fast input changes.

3. **Fetching and Handling Data**
   - Created an API utility (`api.ts`) to handle external data fetching.
   - Implemented debouncing to optimize search performance and avoid excessive API calls.

4. **UI/UX Considerations**
   - Designed an intuitive interface with instant feedback.
   - Styled using **Tailwind CSS** for a modern and responsive UI.
   - Included loading states and error handling for a smooth user experience.

5. **Performance Optimizations**
   - Used React memoization techniques where necessary.
   - Optimized rendering by keeping state updates minimal.

6. **Code Quality and Maintainability**
   - Followed best practices for TypeScript and React.
   - Used ESLint and Prettier for code consistency.

## Component Structure
The project is structured as follows:

```
/src
  ├── components
  │   ├── SearchBox.tsx  # Main search component
  │   ├── SearchBar.tsx  # Input field for searching
  │   ├── ResultList.tsx # Displays list of search results
  │   ├── ResultItem.tsx # Single search result item
  │   ├── TagList.tsx    # Displays list of tags
  │   ├── Tag.tsx        # Single tag component
  │   ├── Footer.tsx     # Footer section
  │
  ├── hooks
  │   ├── useSearch.ts   # Custom hook for search logic
  │
  ├── pages
  │   ├── Home.tsx       # Main page layout
  │
  ├── utils
  │   ├── api.ts         # API handling functions
  │
  ├── main.tsx           # Entry point
  ├── App.tsx            # Root component
```

## Installation Instructions

To set up and run the project locally:


1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173/` (default Vite port).

## Suggestions and Questions
- **Feature Improvements:** Adding a category filter or voice search could improve usability.
- **Performance Checks:** Implementing lazy loading for large search results.