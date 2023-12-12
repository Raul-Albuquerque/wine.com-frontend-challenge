'use client'
import styled from 'styled-components'
import Link from 'next/link'

export const Header = styled.header`
  background-color: var(--color-white);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;

  nav {
    padding-left: 80px;
  }
`
export const PageNav = styled(Link)`
  margin-right: 48px;
  padding-bottom: 36px;
  color: var(--color-gray-default);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
`

export const CartItem = styled(Link)`
  margin-left: 40px;
  position: relative;
  text-decoration: none;

  div {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20px;
    width: 20px;
    text-decoration: none;
    background-color: var(--color-white);
    color: var(--color-light-chardonnay);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: 50%;
  }
`
