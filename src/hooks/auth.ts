import { effect, signal } from "@preact/signals";
import { ID, type Models } from "appwrite";
import { account } from "../constants/appwrite";

const user = signal<null | Models.User<Models.Preferences>>(null);
const isAdmin = signal<boolean>(false);
const isProvider = signal<boolean>(false);

effect(() => {
	isAdmin.value = user.value?.labels.includes("admin") ?? false;
	isProvider.value = user.value?.labels.includes("provider") ?? false;

	console.log(user.value);
	console.log(isAdmin.value);
	console.log(isProvider.value);
});

const signUpWithEmailAndPassword = async (email: string, password: string, name: string) => {
	try {
		await account.create(ID.unique(), email, password, name);
		await account.createEmailPasswordSession(email, password);
		await fetchUser();
		return true;
	} catch (err) {
		console.error("Sign up failed:", err);
		return false;
	}
};

const fetchUser = async () => {
	if (!user.value) user.value = await account.get();

	return user.value;
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		await account.createEmailPasswordSession(email, password);
		await fetchUser();
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

export {
	fetchUser,
	isAdmin,
	isProvider,
	signInWithEmailAndPassword,
	signOut,
	signUpWithEmailAndPassword,
	user,
};
