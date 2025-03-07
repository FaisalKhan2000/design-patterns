class UserSession {
  private user: {
    id: number;
    name: string;
    email: string;
  } | null = null;

  constructor() {
    console.log("UserSession initialized.");
  }

  login(user: { id: number; name: string; email: string }): void {
    this.user = user;
    console.log(`User ${user.name} logged in.`);
  }

  logout(): void {
    console.log(`User ${this.user?.name} logged out.`);
    this.user = null;
  }

  getUser(): { id: number; name: string; email: string } | null {
    return this.user;
  }
}

const userSessionInstance = new UserSession(); // Create the *single* instance.
export default userSessionInstance; // Export the *instance*, not the class.
