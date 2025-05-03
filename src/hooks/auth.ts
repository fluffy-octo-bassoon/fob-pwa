import { effect, signal } from "@preact/signals";
import { ID, type Models } from "appwrite";
import { account } from "../constants/appwrite";

const user = signal<null | Models.User<Models.Preferences>>(null);
const isAdmin = signal<boolean>(false);
const isProvider = signal<boolean>(false);

effect(() => {
	console.log(user.value);
	console.log(isAdmin.value);
	console.log(isProvider.value);

	// const refreshData = async () => {
	// 	user.value = await account.get();
	// 	isAdmin.value = user.value.labels.includes("admin");
	// 	isProvider.value = user.value.labels.includes("provider");
	// };

	// refreshData();
});

const refreshData = async () => {
	user.value = await account.get();
	isAdmin.value = user.value.labels.includes("admin");
	isProvider.value = user.value.labels.includes("provider");
};

const fetchUser = async () => {
	user.value = await account.get();
	isAdmin.value = user.value.labels.includes("admin");
	isProvider.value = user.value.labels.includes("provider");
};

const signUpWithEmailAndPassword = async (email: string, password: string, name: string) => {
	try {
		await account.create(ID.unique(), email, password, name);
		await account.createEmailPasswordSession(email, password);
		refreshData();
		return true;
	} catch (err) {
		console.error("Sign up failed:", err);
		return false;
	}
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		await account.createEmailPasswordSession(email, password);
		refreshData();
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

export { isAdmin, isProvider, signInWithEmailAndPassword, signOut, signUpWithEmailAndPassword, user };
