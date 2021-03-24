import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  return (
    <>
      <S.Navigation>
        {menuItems.map((menu, index)=>{
          var _link = menu.link;
          console.log("menu is",_link);
          // delete duplicate url
          _link = _link.split("/");
          if(_link.length > 2){
            _link = _link.slice(2);
          }
          _link = _link.join("/");

          return (<S.NavigationLink
            to={_link}
            aria-label={menu.name}
            activeClassName="active"
            key={`${menu.link}${index}`}
            >
            {menu.name}
          </S.NavigationLink>)
        },)}

        <S.NavigationButton to="" aria-label="Login">
          {button}
        </S.NavigationButton>
      </S.Navigation>
    </>
  );
};

export default Navigation;
