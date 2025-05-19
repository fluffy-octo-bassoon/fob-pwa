import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation } from "preact-iso";
import { useMemo } from "preact/hooks";
import { isAdmin, isProvider, user } from "../hooks/auth";

const Navigation = () => {
	const { route, path } = useLocation();

	const navElements = useMemo(() => {
		let baseElements = [
			{ label: "Places", link: "/", icon: "explore" },
			{ label: "Profile", link: "/profile", icon: "person" },
			{ label: "Cart", link: "/cart", icon: "shopping_cart" },
		];

		if (!user.value) {
			baseElements = [...baseElements, { label: "Login", link: "/login", icon: "login" }];
		}

		if (isAdmin.value || isProvider.value) {
			baseElements = [...baseElements, { label: "Add", link: "/manage/add", icon: "add_box" }];
		}

		return baseElements;
	}, [user.value, isAdmin.value, isProvider.value]);

	return (
		<>
			<BottomNavigation value={path} sx={{ order: 2 }}>
				{navElements.map(({ label, link, icon }) => (
					<BottomNavigationAction
						key={label}
						label={label}
						value={link}
						icon={<span className="material-symbols-outlined">{icon}</span>}
						onClick={() => route(link)}
					/>
				))}
			</BottomNavigation>
		</>
	);
};

export { Navigation };
