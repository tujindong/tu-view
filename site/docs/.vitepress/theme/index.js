import DefaultTheme from "vitepress/theme";
import tuview from "tu-view";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(tuview);
  },
};
