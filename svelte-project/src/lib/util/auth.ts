  import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, type AuthProvider } from "firebase/auth";
  import { auth } from '$lib/firebase';
  import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "$lib/firebase";
import { error } from "@sveltejs/kit";
import type { RouteParams } from "../../routes/$types";
import type { PageLoad } from "../../routes/[username]/$types";

  async function signInPopUp(provider: AuthProvider) {
    return await signInWithPopup(auth, provider); 
  }

  export async function signInWithGoogle() {
    signInWithProviderPopUp(new GoogleAuthProvider());
  }
  export async function signInWithGithub() {
    signInWithProviderPopUp(new GithubAuthProvider());
  }

  export async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }

  async function signInWithProviderPopUp(provider: AuthProvider) {
    const credential = await signInPopUp(provider);
    const idToken = await credential.user.getIdToken();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
      },
      body: JSON.stringify({ idToken }),
    });
  }

    export async function restrictPageToUser(params: RouteParams) {
      const collectionRef = collection(db, "users");

      const q = query(
        collectionRef,
        // @ts-ignore
        where("username", "==", params.username),
        limit(1)
      );
      const snapshot = await getDocs(q);
      const exists = snapshot.docs[0]?.exists();
      const data = snapshot.docs[0]?.data();
    
      if (!exists) {
        throw error(404, "User does not exist!");
      }
    
      return {
        username: data.username,
        photoURL: data.photoURL,
        bio: data.bio,
        links: data.links ?? [],
      };
    };