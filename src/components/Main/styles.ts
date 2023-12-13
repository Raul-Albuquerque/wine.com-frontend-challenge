'use client'
import styled from 'styled-components'

export const ContentContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: start;

  h3 {
    font-size: 18px;
    line-height: 22px;
  }
`
export const Aside = styled.aside`
  max-width: 260px;
  width: 100%;

  h2 {
    font-size: 20px;
    line-height: 24px;
    color: var(--color--full-black);
    font-weight: 700;
    margin-bottom: 32px;
  }
`
export const Form = styled.form`
  width: 100%;

  h3 {
    font-weight: 700;
    color: var(--color-dark-gray);
    margin-bottom: 16px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  input {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  label {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
`

export const Main = styled.main`
  margin-left: 32px;

  h3 {
    font-weight: 400;
    color: var(--color-black-2);
    margin-bottom: 32px;
  }
`

export const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 24px;

  img {
    height: 24px;
    margin-right: 16px;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }
`

export const Section = styled.section`
  display: flex;
  align-items: start;
  justify-content: right;

  article {
    max-width: 464px;
    width: 100%;
  }
`
export const ProductImage = styled.div`
  width: 636px;
  height: 580px;
  padding: 0px 128px;
  margin-right: 32px;
`

export const BreadCrump = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: var(--color-tannat-default);

    &.current {
      color: var(--color-gray-light);
      font-weight: 400;
    }
  }
`

export const ProductName = styled.h2`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-gray-darker);
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 48px;

  p {
    margin-right: 8px;
    color: var(--color-gray-default);
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }
`

export const Flag = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
`
export const ProductPrice = styled.div`
  margin-bottom: 48px;
  display: block;

  h4 {
    color: var(--color-tannat-default);
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: var(--color-gray-light);
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const Real = styled.small`
  font-size: 40px;
  letter-spacing: 0.4px;
`

export const Centavos = styled.small`
  font-size: 32px;
  letter-spacing: 0.4px;
`

export const ProductReview = styled.div`
  margin-bottom: 48px;

  h5 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--color-gray-darker);
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-gray);
  }
`

export const CartShortcut = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--color-success-default);
  color: var(--color-white);
  height: 56px;
  max-width: 328px;
  width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  border-radius: var(--border-radius);

  p {
    font-size: 24px;
    line-height: 42px;
  }

  span {
    background-color: var(--color-white);
    height: 33px;
    width: 2px;
    opacity: 0.1;
  }
`

export const Less = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid var(--color-white);
  opacity: 0.4;
  border-radius: 50%;
  text-align: center;
  margin: 16px 22px;
  cursor: pointer;
`
export const More = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  text-align: center;
  margin: 16px 22px;
  cursor: pointer;
`
