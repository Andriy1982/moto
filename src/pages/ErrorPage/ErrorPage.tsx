import React from 'react';
import {ErrorPageStyle} from '@app/pages/ErrorPage/ErrorPage.style';

export const ErrorPage = ({errorText = 'Страница не найдена'}) => {
  return (
    <ErrorPageStyle>
      <h1>404</h1>
      <h2>{errorText}</h2>
      <p>Возможно, вы допустили ошибку в адресной строке.</p>
    </ErrorPageStyle>
  );
};
