'use client'
import styled from 'styled-components'

export const CardContainer = styled.article`
  width: 260px;
`
export const InfoContainer = styled.div`
  background-color: var(--color-white);
  padding: 10px 10px 20px 10px;

  div {
    position: relative;

    img {
      margin: 0px 18px 8px 18px;
    }
  }
`
export const Label = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  right: -8px;
  bottom: 8px;
`
export const ProductName = styled.h4`
  width: 232px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.22px;
`
export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  margin-bottom: 4px;

  p {
    margin-right: 5px;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    color: var(--color-gray-light);
    text-decoration: line-through;
  }
`
