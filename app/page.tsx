import Image from "next/image";
import Homes from "./homes/page";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main>
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      <div>
        <h1>Home</h1>
      </div>
    </main>
  );
}
