import { StyledAppBar, StyledNav } from './AppBar.styled';
import { FaPlus, FaLanguage, FaBell } from 'react-icons/fa';
import { FiCircle, FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from '../../images/logo.svg';

export const AppBar = () => {
  return (
    <StyledAppBar
      py={3}
      px="40px"
      display="flex"
      justifyContent="space-between"
      fontSize="m"
      bg="darkBlue"
      color="white"
      height="50px"
      as="header"
    >
      <StyledNav display="flex">
        <Logo
          style={{ width: 154, height: 20, margin: 'auto', marginRight: 40 }}
        />

        <p>Фільми</p>
        <p>Серіали</p>
        <p>Персони</p>
        <p>Ще</p>
      </StyledNav>
      <StyledNav display="flex" m="auto 0" style={{ gap: 32 }}>
        <FaPlus size="20px" />
        <FaLanguage size="20px" />
        <FaBell size="20px" />
        <FiCircle size="20px" />
        <FiSearch size="20px" />
      </StyledNav>
    </StyledAppBar>
  );
};