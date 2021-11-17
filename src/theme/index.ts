export const theme = {
  colors: {
    primaryLight: '#8abdff',
    primary: '#6d5dfc',
    primaryDark: '#5b0eeb',
    white: '#fff',
    greyLight1: '#E4EBF5',
    greyLight2: '#c8d0e7',
    greyLight3: '#bec8e4',
    greyDark: '#9baacf',
  },
  shadow: {
    get default() {
      return `.3rem .3rem .6rem var(${theme.colors.greyLight2}), -.2rem -.2rem .5rem var(${theme.colors.white})`;
    },
    get linear() {
      return `inset .2rem .2rem .5rem var(${theme.colors.greyLight2}), inset -.2rem -.2rem .5rem var(${theme.colors.white})`;
    },
  },
};
