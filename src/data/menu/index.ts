import { faGamepad, faGear, faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import languages from "../../translations";
import { Language } from "../../types/Language";
import { Theme } from "../../types/Theme";

export const dataButtons = (language: Language) => [
  {
    name: languages[language].sideBar.home,
    path: '/',
    icon: faHome,
  },
  {
    name: languages[language].sideBar.game,
    path: '/',
    icon: faGamepad
  },
  {
    name: languages[language].sideBar.settings,
    path: '/',
    icon: faGear
  },
];

export const themeButton = (language: Language, theme: Theme) => ({
  name: languages[language].sideBar.theme,
  path: '/',
  icon: theme === 'light' ? faMoon : faSun
});