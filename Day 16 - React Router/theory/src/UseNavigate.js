// The useNavigate hook is a utility function provided by the react-router-dom library in React that enables navigation
// between different pages or views in a single-page application.

// This hook is commonly used to programmatically navigate users to different routes within a React component, such as
// after a form is submitted or when a button is clicked. It provides a convenient way to navigate without needing to use
// the history object directly.

// Here's an example of how to use the useNavigate hook in a React component:

import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <div>
      <button onClick={handleClick}>Go to About page</button>
    </div>
  );
}

// useNavigate and NavLink are both used for navigation in a React application, but they are used in different situations.

// useNavigate is a React hook that allows you to navigate programmatically to a specific URL or route in your application.
// This means you can navigate to a different page in your application using JavaScript code instead of clicking on a link or
// typing the URL in the browser's address bar. You would typically use useNavigate in response to a user event like a button
// click or form submission.

// NavLink is a React component that provides a way to render links in your application that can be clicked to navigate to a
// specific URL or route. When a user clicks on a NavLink, they will be taken to the specified URL or route.
// You would typically use NavLink to create navigation links in your application, like a menu that
// links to different parts of your site.
