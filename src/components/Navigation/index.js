import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  //console.log(menuItems);
  //console.log("link to");
  //menuItems.map((menu, index) =>console.log(menu.link));

  return (
    <>
      <S.Navigation>
        {menuItems.map((menu, index) => (
          <S.NavigationLink
            to={menu.link}
            aria-label={menu.name}
            activeClassName="active"
            key={`${menu.link}${index}`}
            >
            {menu.name}
          </S.NavigationLink>
        ))}

      </S.Navigation>
    </>
  );
};

export default Navigation;
