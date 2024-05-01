# Jobify - Job Tracking App

#### Complete App

[Jobify - Job Tracking App](https://jobify-mern-project-ugah.onrender.com)

#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest projectName -- --template react
```

#### Vite - Folder and File Structure

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension

#### Remove Boilerplate

- remove App.css
- remove all code in index.css

  App.jsx

```jsx
const App = () => {
  return <h1>Jobify App</h1>;
};
export default App;
```

#### Project Assets

- get assets folder from complete project
- copy index.css
- copy/move README.md (steps)
  - work independently
  - reference
  - troubleshoot
  - copy

#### Global Styles

- saves times on the setup
- less lines of css
- speeds up the development

- if any questions about specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Title and Favicon

- add favicon.ico in public
- change title and favicon in index.html

```html
<head>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <title>Jobify</title>
</head>
```

- resource [Generate Favicons](https://favicon.io/)

#### Install Packages (Optional)

- yes, specific package versions
- specific commands will be provided later
- won't need to stop/start server

```sh
npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

```

#### Router

[React Router](https://reactrouter.com/en/main)

- version 6.4 brought significant changes (loader and action)
- pages as independent entities
- less need for global state
- more pages
