import { useLocation } from "preact-iso";
import { UserSignal } from "../../hooks/auth";

function CartPage() {
	const { route } = useLocation();

	if (UserSignal.value === null) route("/login", true);

	return (
		<div>
			<h1>Cart</h1>
		</div>
	);
}
export default CartPage;
