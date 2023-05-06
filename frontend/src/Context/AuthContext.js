import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function startSession(user) {
    setCurrentUser(user);
  }

  function endSession() {
    setCurrentUser(null);
  }

  const authContextValue = {
    currentUser,
    startSession,
    endSession
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };