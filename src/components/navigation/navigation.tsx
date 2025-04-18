import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation } from "preact-iso";
import { useState } from "preact/hooks";

const navElements = [
	{ displayName: "Places", link: "/", icon: "explore" },
	{ displayName: "Profile", link: "/profile", icon: "person" },
	{ displayName: "Cart", link: "/cart", icon: "shopping_cart" },
];

const Navigation = () => {
	const [value, setValue] = useState("/");
	const { route } = useLocation();

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
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
	);
};

export default Navigation;
