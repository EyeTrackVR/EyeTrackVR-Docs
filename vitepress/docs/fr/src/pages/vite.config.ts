//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

// https://github.com/nextapps-de/flexsearch#options
var flexSearchIndexOptions = {
    preset: "score",
    cache: 1000,
    context: true,
}

//default options
var options = {
    ...flexSearchIndexOptions,
    previewLength: 62,
    buttonLabel: "Rechercher",
    placeholder: "rechercher dans la doc",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
});