import { detect, fromNavigator, fromStorage, fromUrl } from "@lingui/detect-locale";
import { effect, signal } from "@preact/signals";

const locale = signal<null | string>(null);

const langFallback = "en";

locale.value = detect(fromUrl("lang"), fromStorage("lang"), fromNavigator(), langFallback);

effect(() => console.log(locale));
