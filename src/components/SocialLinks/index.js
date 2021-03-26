import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href=""
          title="Github"
          target="_blank"
        >
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href=""
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
