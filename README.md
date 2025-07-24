# ERR Homework - Jupiter's Selection

> An Angular application showcasing the content from ERR's Jupiter.

## 🚀 - Quick Start

### Prerequisites

- Angular CLI
- Up-to-date Node and NPM

```bash
npm install
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## ℹ️ - Key Features

- Content based on real-time Jupiter API integration
- Jupiter-like horizontal and vertical scrolling
- Error-handling
- Angular 20 architecture

## 🏗️ - Architecture

- Using signals for passing data between components
- Type-safe classes
- Pipes for filtering the relevant sections
- Injection of Angular services

## 📄 - Development Decisions

- Only vertical portraits
- Removed MyFrenchFestival despite it being a highTimeline = TRUE
- Implemented a simple search function with pipe
- Implementation of Angular 20 approach
- Used placeholder "Image Not Found" from Wikimedia

## 🗺️ - Structure

```
err_project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── search-bar/             # Search bar component
│   │   │   ├── card/                   # Show image cards
│   │   │   └── row/                    # Horizontal scrolling rows
│   │   ├── home/
│   │   │   ├── home.ts                 # Main page logic
│   │   │   └── home.html               # Main page template
│   │   ├── pipes/
│   │   │   ├── search-pipe.ts          # Search filter pipe
│   │   │   └── section-filter-pipe.ts  # Section filter pipe
│   │   ├── services/
│   │   │   └── connection-service.ts   # Jupiter API service
│   │   ├── types/
│   │   │   ├── api.types.ts            # API response types
│   │   │   └── show.types.ts           # Show model types
│   │   ├── app.ts                      # Root app component
│   │   └── app.html                    # App template
│   └── app.css                         # Global styles
│
└── README.md                           # Project documentation
```
