export const lightTheme = {
  bg: '#ffffff',
  color: '#1a1a1a',
  bgHover: '#f0f0f0',
  hover: '#4d4d4d',
  box: '#f0f0f0',
  border: '#cccccc',
  linkBtn: '#e0e0e0',
  linkBtnHover: '#cccccc',
  openBtn: '#e0e0e0',
  openBtnHover: '#cccccc',
  isDarkMode: false,
  main: require('../assets/light/main.jpg'),
  naver: require('../assets/naver_logo.png'),
  git: require('../assets/light/github_logo.png'),
  kakaotalk: require('../assets/kakaotalk_logo.png'),
  tistory: require('../assets/tistory_logo.png'),
};
export const darkTheme = {
  bg: '#1a1a1a',
  color: '#ffffff',
  bgHover: '#292929',
  hover: '#cccccc',
  box: '#292929',
  border: '#4d4d4d',
  linkBtn: '#393939',
  linkBtnHover: '#4d4d4d',
  openBtn: '#393939',
  openBtnHover: '#4d4d4d',
  isDarkMode: true,
  main: require('../assets/dark/main.jpg'),
  naver: require('../assets/naver_logo.png'),
  git: require('../assets/dark/githubwhite_logo.png'),
  kakaotalk: require('../assets/kakaotalk_logo.png'),
  tistory: require('../assets/tistory_logo.png'),
};

export type ThemeSnsType = Pick<
  typeof lightTheme,
  'git' | 'kakaotalk' | 'tistory' | 'naver'
>;

export default { lightTheme, darkTheme };
