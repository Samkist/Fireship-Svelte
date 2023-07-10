  import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut as sO } from "firebase/auth";
  import { user, auth } from '$lib/firebase';

  export let signOut = () => { sO(auth);}
  // @ts-ignore
	export let signInPopUp = (provider) => { signInWithPopup(auth, provider); }

  export async function signInWithGoogle() {
   await signInPopUp(new GoogleAuthProvider());
  }
  export async function signInWithGithub() {
   await signInPopUp(new GithubAuthProvider());
  }