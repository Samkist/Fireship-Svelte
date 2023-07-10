  import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut as sO, type AuthProvider, OAuthProvider, type UserCredential } from "firebase/auth";
  import { user, auth } from '$lib/firebase';

  export async function signOut() {
    await sO(auth);
  }

  async function signInPopUp(provider: AuthProvider) {
    return await signInWithPopup(auth, provider); 
  }

  export async function signInWithGoogle() {
    signInWithProviderPopUp(new GoogleAuthProvider());
  }
  export async function signInWithGithub() {
   signInWithProviderPopUp(new GithubAuthProvider());
  }

  async function signInWithProviderPopUp(provider: AuthProvider) {
    const credential = await signInPopUp(provider);
    const idToken = await credential.user.getIdToken();

    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ idToken })
    });
  }


  export async function signOutSSR() {
    const res = await fetch('/api/signin', {
      method: 'DELETE'
    });
    await signOut();
  }