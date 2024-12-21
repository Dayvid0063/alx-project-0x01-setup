# Blog Application

This project is a modern web application built with Next.js, TypeScript, and Tailwind CSS. It demonstrates fundamental concepts of building a blog platform with user management capabilities.

## Project Structure

```
alx-project-0x01/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   ├── UserCard.tsx
│   │   └── UserModal.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   ├── posts/
│   │   └── index.tsx
│   └── users/
│       └── index.tsx
├── public/
│   └── assets/
│       └── images/
└── styles/
    └── globals.css
```

## Tasks

### Setting up Project

**Objective**: Set up a base application using create-next-app@latest.

**Steps**:
1. Create new Next.js project with TypeScript
2. Configure project settings:
   - Yes for TypeScript
   - Yes for ESLint
   - Yes for Tailwind CSS
   - No for src/ directory
   - No for App Router
   - Yes for import alias (@/*)
3. Set up basic component structure
4. Configure global styles

### Set up navigation between pages

**Objective**: Implement navigation between multiple pages.

**Features**:
- Header component with navigation links
- Homepage with welcome message
- Dynamic routing between pages
- Consistent layout across pages

### Implement Posts Card Components

**Objective**: Create and implement post card components.

**Features**:
- PostProps interface definition
- PostCard component implementation
- Posts page with grid layout
- Integration with JSONPlaceholder API
- Static page generation

### Implement Users Card Components

**Objective**: Create and implement user card components.

**Features**:
- UserProps interface definition
- UserCard component implementation
- Users page with grid layout
- Integration with JSONPlaceholder API
- Responsive design

### More Components (Extending Post Page)

**Objective**: Implement form functionality for creating new posts.

**Features**:
- PostModal component
- Form validation
- State management
- Dynamic post creation
- Modal integration

### Implement the User Modal

**Objective**: Create form functionality for adding new users.

**Features**:
- UserModal component
- Complex form handling
- Nested object state management
- Form validation
- Dynamic user creation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Dayvid0063/alx-project-0x01-setup.git
cd alx-project-0x01
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Dependencies

- Next.js
- TypeScript
- Tailwind CSS
- React
- Lucide React (for icons)

## API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo data:
- Posts: https://jsonplaceholder.typicode.com/posts
- Users: https://jsonplaceholder.typicode.com/users

## Test Data

### Sample User Data
```javascript
{
  "name": "Dayv Orji",
  "username": "DeeOrji",
  "email": "test@techcorp.com",
  "phone": "1-234-555-6789",
  "website": "dayvtest.dev",
  "address": {
    "street": "123 Innovation Drive",
    "suite": "Suite 400",
    "city": "Lagos",
    "zipcode": "78701",
    "geo": {
      "lat": "30.2672",
      "lng": "-97.7431"
    }
  },
  "company": {
    "name": "TechCorp Solutions",
    "catchPhrase": "Innovative solutions for tomorrow's challenges",
    "bs": "cutting-edge digital transformation"
  }
}
```

## Features

- Responsive design
- Server-side rendering with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Form handling with validation
- Modal implementations
- API integration
- State management with React hooks
