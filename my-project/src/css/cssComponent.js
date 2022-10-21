import styled from "styled-components";

export const DflexAll = styled.div`
  &.nav {
    padding: 0 60px;
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    background-color: rgba(128, 128, 128, 0.5);
    color: #fff;
  }
  &.user {
    display: flex;
  }
  &.user .icon-search {
    margin-left: 30px;
  }
  &.user .icon-search .icon-search-child {
    font-size: 30px;
  }
  &.user .login {
    text-decoration: none;
    color: #fff;
    padding: 2px;
    border: 1px solid transparent;
    border-radius: 25px;
  }
  &.user .login:hover {
    border: 1px solid #2871c6;
  }
  &.user .login div {
    padding: 6px 16px;
    background-color: #2871c6;
    border-radius: 25px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
export const Logo = styled.div`
  &.logo {
    width: 15%;
    height: 100%;
  }
`;
export const ListMenu = styled.div`
  &.list-menu {
    width: 26%;
    justify-content: space-between;
    display: flex;
  }
  &.list-menu a {
    padding: 10px;
    /* border: 1px solid transparent; */
    /* text-align: center; */
    list-style: none;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
  }
  &.list-menu a:hover {
    /* border-bottom: 1px solid #0d6efd; */
    color: #4097fd;
    border-radius: 10px;
  }
`;
export const ItemMenu = styled.div``;
export const LogoWow = styled.img`
  width: 100%;
  margin-bottom: 20px;
  transform: translateY();
`;
