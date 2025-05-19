import { defineConfig } from "@lingui/cli";

export default defineConfig({
	locales: ["en", "pl"],
	sourceLocale: "en",
	format: "po",
	compileNamespace: "ts",
	catalogs: [
		{
			path: "src/locale/{locale}/messages",
			include: ["src"],
			exclude: ["**/node_modules/**"],
		},
	],
});
