import { signal } from "@preact/signals";
import type { User } from "@supabase/supabase-js";
import { useEffect } from "preact/hooks";
import supabase from "../constants/supabase";

export const UserSignal = signal<User | null>(null);

export const useAuth = () => {
	useEffect(() => {
		const fetchUser = async () => {
			const { data, error } = await supabase.auth.getUser();
			if (data) {
				UserSignal.value = data.user;
			}
			if (error) console.error(error);
		};
		fetchUser();
	}, []);

	async function signUpNewUser(email: string, password: string) {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});
		if (data?.user) {
			UserSignal.value = data.user;
		}
		if (error) console.error(error);
	}

	async function signInWithEmail(email: string, password: string) {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (data?.user) {
			UserSignal.value = data.user;
		}
		if (error) console.error(error);
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		if (error) console.error(error);
	}

	return { signUpNewUser, signInWithEmail, signOut };
};
