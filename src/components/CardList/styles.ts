'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 44px;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-tannat);
`

export const Page = styled.div`
  background-color: transparent;
  padding: 10px 14px;
  border: 1px solid var(--color-tannat);
  border-radius: 3px;
  margin-right: 8px;
  cursor: pointer;

  &.current {
    background-color: var(--color-tannat);
    color: var(--color-white);
    padding: 10px 14px;
    border: 1px solid var(--color-tannat);
    border-radius: 3px;
  }

  &.next {
    background-color: transparent;
    padding: 10px 30px;
    border: 1px solid var(--color-tannat);
    border-radius: 3px;
  }
`
export const Ellipsis = styled.p`
  padding-right: 14px;
`
export const NextPage = styled.div`
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 20px;
  cursor: pointer;

  p {
    margin-right: 3px;
  }
`
