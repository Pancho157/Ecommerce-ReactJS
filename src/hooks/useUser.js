import { useContext, useCallback } from "react";
import UserContext from "../context/UserContext";

export default function useUser() {
  const [user, setUser] = useContext(UserContext);

  const login = useCallback(() => {
    setUser("test");
  }, [setUser]);

  return { isLoggedIn: Boolean(user), login };
}
