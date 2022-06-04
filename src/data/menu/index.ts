import { config, game, home, moon, sun } from "../../icons";
import languages from "../../translations";
import { Language } from "../../types/Language";
import { Theme } from "../../types/Theme";

export const dataButtons = (language: Language) => [
  {
    name: languages[language].sideBar.home,
    path: '/',
    icon: home()
  },
  {
    name: languages[language].sideBar.game,
    path: '/',
    icon: game()
  },
  {
    name: languages[language].sideBar.settings,
    path: '/',
    icon: config()
  },
];

export const themeButton = (language: Language, theme: Theme) => ({
  name: languages[language].sideBar.theme,
  path: '/',
  icon: theme === 'light' ? moon() : sun()
});