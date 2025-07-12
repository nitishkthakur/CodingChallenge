import "react"
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
export function AuthenticationPage() {
  // This function is a placeholder for the authentication page logic.
  // It can be expanded to include the actual implementation of the authentication page.
  return (
    <div className="auth-container">
      <SignedIn>
        <div className="redirect-message">
          <p>You are already signed in.</p>
        </div>
      </SignedIn>

      <SignedOut>
        <SignIn routing = "path" path = "/sign-in"/>
        <SignUp routing = "path" path = "/sign-up"/>
      </SignedOut>

    </div>
  );
}