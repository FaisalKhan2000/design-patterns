import userSession from "./user_session.ts";

userSession.login({ id: 1, name: "Alice", email: "alice@email.com" });

console.log(userSession.getUser()); // Output: { id: 1, name: 'Alice', email: '
userSession.logout();
