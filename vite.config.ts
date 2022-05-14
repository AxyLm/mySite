import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~/": `${path.resolve(__dirname, "./src")}/`,
			"/~/": `${path.resolve(__dirname, "src")}/`,
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		proxy: {},
		cors: true, //为开发服务器配置 CORS
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: true,
		manifest: true,
		chunkSizeWarningLimit: 533,
	},
	plugins: [
		vue(),

		VueI18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [path.resolve(__dirname, "locales/**")],
		}),
		Icons({
			scale: 1,
			defaultStyle: " ", // Style apply to icons
			defaultClass: "icon", // Class names apply to icons
			autoInstall: true,
			compiler: "vue3",
		}),
		Components({
      resolvers: [
        IconsResolver({
          // to avoid naming conflicts
          // a prefix can be specified for icons
          prefix: 'i'
        })
      ]
    }),
		AutoImport({
			imports: ["vue", "vue-router", "vue-i18n"],
			dts: "./src/auto-imports.d.ts",
		}),
	],
});
