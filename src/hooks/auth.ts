import { effect, signal } from "@preact/signals";
import { ID, type Models } from "appwrite";
import { account } from "../constants/appwrite";

const user = signal<null | Models.User<Models.Preferences>>(null);

effect(() => {
	console.log(user.value);
});

const fetchUser = async () => {
	try {
		user.value = await account.get();
	} catch {
		user.value = null;
	}
};

const signUpWithEmailAndPassword = async (email: string, password: string, name: string) => {
	try {
		await account.create(ID.unique(), email, password, name);
		await account.createEmailPasswordSession(email, password);
		user.value = await account.get();
		return true;
	} catch (err) {
		console.error("Sign up failed:", err);
		return false;
	}
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		await account.createEmailPasswordSession(email, password);
		user.value = await account.get();
		return true;
	} catch (err) {
		console.error("Sign in failed:", err);
		return false;
	}
};

const signOut = async () => {
	try {
		await account.deleteSession("current");
		user.value = null;
		return true;
	} catch (err) {
		console.error("Sign out failed:", err);
		return false;
	}
};

fetchUser();

export { signInWithEmailAndPassword, signOut, signUpWithEmailAndPassword, user };
