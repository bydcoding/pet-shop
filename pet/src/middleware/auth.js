import { useUser } from "../store/user";

export function requireLogin(to, from, next) {
  const user = useUser();

  if (!user.isLogin) {
    next("/login");
  } else {
    next();
  }
}
