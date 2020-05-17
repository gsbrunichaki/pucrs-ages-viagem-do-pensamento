import {firestore, auth} from '../lib/firebase';

class User {
  constructor() {
    this.firestore = firestore;
    this.auth = auth;
    this.user = null;
  }

  async loadUser() {
    const user = await firestore
      .collection('/users')
      .doc(this.uid)
      .get();

    this.user = user.data();
  }

  async logout() {
    await this.auth.signOut();
    this.user = null;
  }

  get isLogged() {
    return this.auth.currentUser != null;
  }

  get uid() {
    return this.auth.currentUser ? this.auth.currentUser.uid : null;
  }

  async login(email, password) {
    await this.auth.signInWithEmailAndPassword(email, password);
  }

  async create(userSchema, password) {
    const body = userSchema.getBody();

    const userCredential = await this.auth.createUserWithEmailAndPassword(body.email, password);

    return await this.firestore.collection("users").doc(userCredential.user.uid).set(body);
  }

}

export default new User();
