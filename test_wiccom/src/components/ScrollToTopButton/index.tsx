import React, { useState } from 'react';
import { StyledScrollButton } from './styles';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <StyledScrollButton onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
        ^
    </StyledScrollButton>
  );
};

export default ScrollToTop;