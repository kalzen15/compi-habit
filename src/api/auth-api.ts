import firebase from "firebase/app";
import "firebase/auth";

export const signUpUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await firebase?.auth()?.currentUser?.updateProfile({
      displayName: name,
    });
    return { user };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return { user };
  } catch (error) {
    return { error: error.message };
  }
};

export const resetPassword = async ({ email }: { email: string }) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    return { error: error.message };
  }
};

export const logOutUser = () => {
  firebase.auth().signOut();
};
