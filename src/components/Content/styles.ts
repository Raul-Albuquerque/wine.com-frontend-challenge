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
