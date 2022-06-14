import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import RoundButton from '../RoundButton';
import { SyledButtonContainer } from './styled';

const ModalLoginButtons: React.FC = ({  }) => {
  const { activeLanguage } = useLanguage();

  return (
    <SyledButtonContainer>
      <RoundButton bgcolor="primary" color="alternative2">
        {activeLanguage.modal.cancel}
      </RoundButton>
      <RoundButton bgcolor="secondary" color="alternative2">
        {activeLanguage.modal.login}
      </RoundButton>
    </SyledButtonContainer>
  );
}

export default ModalLoginButtons;