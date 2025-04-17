import { useLocation } from "preact-iso";
import styles from "./navigation.module.css";

type navElement = {
	displayName: string;
	link: string;
	icon?: string;
};

interface NavigationProps {
	navElements: navElement[];
}

const Navigation = ({ navElements }: NavigationProps) => {
	const { path } = useLocation();

	return (
		<nav className={styles.navContainer}>
			<ul className={styles.navList}>
				{navElements.map(({ displayName, link, icon }) => {
					const isActive = path === link;
					return (
						<li className={styles.navElement} key={link}>
							<a style={{ color: isActive ? "var(--primary)" : "" }} href={link}>
								{icon && <span className="material-symbols-outlined">{icon}</span>}
								<span className={styles.navText}>{displayName}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
