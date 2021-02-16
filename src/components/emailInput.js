import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  ${p =>
    p.centered &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}

  #newsletter {
    background-color: ${({ theme }) => theme.color.background};
    display: block;
    width: 370px;
    height: 54px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    margin-bottom: 38px;
  }

  #newsletter-submit {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    height: 100%;
    width: 131px;
    border-radius: 15px;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
  }

  #newsletter-email {
    font-size: 18px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.color.primary};
    height: 100%;
    width: auto;
    padding-left: 15px;
    outline: none;

    ::placeholder {
      font-size: 18px;
      font-family: "Karla", sans-serif;
      color: ${({ theme }) => theme.color.lightText};
    }
  }

  .newsletter-text {
    font-size: 18px;

    &__emoji {
      margin-right: 5px;
    }
  }
`

const EmailInput = ({ centered }) => {
  return (
    <Wrapper centered={centered}>
      <form id="newsletter">
        <input id="newsletter-email" type="email" placeholder="Adres email" />
        <input id="newsletter-submit" type="submit" value="Zapisz" />
      </form>
      <span className="newsletter-text">
        <span
          className="newsletter-text__emoji"
          role="img"
          aria-label="Party popper emoji"
        >
          🎉
        </span>
        Dołącz do newslettera i poznawaj na bieżąco świat frontendu!
      </span>
    </Wrapper>
  )
}

export default EmailInput
