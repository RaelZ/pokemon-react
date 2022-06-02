import React from 'react';
import useLanguage from '../../../hooks/useLanguage';
import useTheme from '../../../hooks/useTheme';
import { themes } from '../../../themes';
import SquaredButton from '../../SquaredButton';
import { dataButtons, themeButton } from './dataButtons';
import { StyledSideBar } from './styled';

const Sidebar: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  const { language } = useLanguage();
  const buttons = dataButtons(language);
  const themedButton = themeButton(language, theme)
  const [count, setCount] = React.useState(0);

  return (
    <StyledSideBar theme={themes[theme]}>
      <div>
        {buttons.map((button, index) => (
          <SquaredButton
            key={index}
          >
            <>
              {button.icon}
              <p>{button.name}</p>
            </>
          </SquaredButton>
        ))}
      </div>
      <SquaredButton onClick={() => changeTheme()}>
        <>
          {themedButton.icon}
          <p>{`${themedButton.name} - ${theme}`}</p>
        </>
      </SquaredButton>
      <p>{count}</p>
      <button onClick={() => setCount(+count)}>AA</button>
    </StyledSideBar>
  );
}

export default Sidebar;