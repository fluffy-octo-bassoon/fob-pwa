import { lingui } from "@lingui/vite-plugin";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		preact({
			babel: {
				plugins: ["@lingui/babel-plugin-lingui-macro"],
			},
		}),
		lingui(),
		VitePWA({ registerType: "autoUpdate" }),
	],
});
