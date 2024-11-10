# Product Card Display

A simple React application that displays a product card with responsive design using React Bootstrap.

## Features

- Responsive product card layout
- Dynamic content rendering from a product data file
- Conditional rendering of welcome message and profile image
- Hover effects and smooth transitions
- Bootstrap styling with custom CSS

## Setup

1. Clone the repository

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Dependencies

- React
- React Bootstrap
- Bootstrap

## Project Structure

```
src/
├── components/
│   ├── Name.js
│   ├── Price.js
│   ├── Description.js
│   └── Image.js
├── data/
│   └── product.js
├── App.jsx
├── App.css
└── main.jsx
```

## Customization

- Edit `src/data/product.js` to change the product details
- Modify `firstName` in `App.jsx` to personalize the welcome message
- Adjust styles in `App.css` to change the appearance
