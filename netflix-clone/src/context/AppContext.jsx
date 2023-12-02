import { createContext, useContext, useState } from "react";

const appContext = createContext(null);

const AppContext = ({ children }) => {
  // user state
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const [wishlist, setWishlist] = useState(() =>
    JSON.parse(localStorage.getItem("wishlist"))
  );

  const getWishlist = () => {
    const myWishlist = wishlist?.filter(wish => wish.userId === currentUser.id);
    return myWishlist ?? [];
  };

  const addToWishlist = movieData => {
    const allUsersWishlist = JSON.parse(localStorage.getItem("wishlist"));
    allUsersWishlist?.push({
      ...movieData,
      userId: currentUser.id,
    });

    localStorage.setItem("wishlist", JSON.stringify(allUsersWishlist));
    setWishlist(allUsersWishlist);
  };
  const removeFromWishlist = movieId => {
    const allUsersWishlist = JSON.parse(localStorage.getItem("wishlist"));
    const update = allUsersWishlist?.filter(wish => wish.movieId !== movieId);

    localStorage.setItem("wishlist", JSON.stringify(update));
    setWishlist(update);
  };

  const login = userData => {
    setCurrentUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.setItem("currentUser", null);
  };

  const auth = () => !!currentUser;

  return (
    <appContext.Provider
      value={{
        login,
        auth,
        logout,
        getWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;

// custom hook
export const useAppContext = () => useContext(appContext);