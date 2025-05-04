import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { signal } from "@preact/signals";
import { useLocation } from "preact-iso";

const currentRoute = signal("/profile");

const navElements = [
	{ displayName: "Places", link: "/", icon: "explore" },
	{ displayName: "Profile", link: "/profile", icon: "person" },
	{ displayName: "Cart", link: "/cart", icon: "shopping_cart" },
];

// if (isAdmin || isProvider)
// 	navElements = [...navElements, { displayName: "Add", link: "/trips/add", icon: "add_box" }];

const Navigation = () => {
	const { route } = useLocation();

	return (
		<>
			<BottomNavigation
				value={currentRoute.value}
				onChange={(_event, newValue) => {
					currentRoute.value = newValue;
				}}
				sx={{ order: 2 }}
			>
				{navElements.map(({ displayName, link, icon }) => (
					<BottomNavigationAction
						key={displayName}
						label={displayName}
						value={link}
						icon={<span className="material-symbols-outlined">{icon}</span>}
						onClick={() => route(link)}
					/>
				))}
			</BottomNavigation>
		</>
	);
};

export default Navigation;
