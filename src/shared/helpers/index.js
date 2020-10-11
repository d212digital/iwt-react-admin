const ligthTheme = {
  backgroundColor: 'white',
  color: '#646777',
};

const darkTheme = {
  backgroundColor: '#2e2c34',
  color: '#dddddd',
};

export const themes = {
  ligthTheme,
  darkTheme,
};

export const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

function getTooltipStyles(themeName, type) {
  switch (themeName) {
    case 'theme-dark': {
      const { backgroundColor, color } = darkTheme;
      return {
        contentStyle: { backgroundColor },
        itemStyle: type === 'defaultItems' ? null : { color },
      };
    }
    case 'theme-light': {
      return ligthTheme;
    }
    default: return ligthTheme;
  }
}

export default getTooltipStyles;
