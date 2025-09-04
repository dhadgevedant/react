# React Context API Notes

## Problem with Prop Drilling

Passing data through multiple levels of nested components (e.g., `Dashboard → RightPanel → BottomSide`) is inefficient and leads to **prop drilling** — where intermediate components receive props they don't need, just to forward them.

### Solution

Use the **React Context API** to pass data directly to the components that need it.

---

## Alternatives to Context API

Other popular **state management tools** include:

* **Redux**
* **Redux Toolkit (RTK)**
* **Zustand**

These are useful for more complex state management needs.

---

## Setting Up Context API

### 1. Folder Structure

Create a separate folder for contexts:

```
src/
  └── context/
        └── UserContext.js
        └── UserContextProvider.jsx
```

---

### 2. `UserContext.js`

This file is a plain JavaScript file that creates and exports the context.

```js
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
```

* Each component requiring context should have its own context file.
* This is a pure JS file, not JSX.

---

### 3. `UserContextProvider.jsx`

This component will wrap around other components and provide access to the context.

```jsx
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

#### Purpose:

* Acts as a wrapper/outlet for all children.
* Provides the `user` state and the `setUser` function to children via context.

---

## Using the Context in Application

### In `App.jsx`

Wrap your application inside the `UserContextProvider` to make context available to all components.

```jsx
import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
```

---

## Components Using the Context

### 1. `Login.jsx` — Sending Data

#### Steps:

1. Create two `useState` variables for input fields (`username`, `password`).
2. Use `onChange` to update these state values.
3. Import and use `setUser` from `UserContext` to store login data.

```jsx
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
```

---

### 2. `Profile.jsx` — Displaying Data

Use `useContext` to access `user` data.

```jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No user logged in.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default Profile;
```

---

## Summary

* Avoid prop drilling by using the Context API.
* Each major feature/component can have its own context.
* Wrap your app with the provider to access the context in nested components.
* Alternatives like Redux and Zustand are more suitable for large-scale applications or when you need more powerful state management features.

---

Let me know if you'd like a downloadable `.md` file or code snippets separated into individual files.
