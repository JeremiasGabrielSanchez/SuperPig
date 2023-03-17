import { OAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth";

const provider = new OAuthProvider('oidc.micerdito');

provider.setCustomParameters({
  // Target specific email with login hint.
  login_hint: 'user@example.com',
  name:'',
  lastname:'',
  phone:''
});