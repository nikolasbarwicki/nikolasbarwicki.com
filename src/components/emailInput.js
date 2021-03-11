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
    width: 37rem;
    height: 5.4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    margin-bottom: 3.8rem;
  }

  .newsletter-submit {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    height: 100%;
    width: 13.1rem;
    border-radius: 1.5rem;
    font-size: 1.8rem;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
  }

  #newsletter-email {
    font-size: 1.8rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.color.primary};
    height: 100%;
    width: auto;
    padding-left: 1.5rem;
    outline: none;

    ::placeholder {
      font-size: 1.8rem;
      font-family: "Karla", sans-serif;
      color: ${({ theme }) => theme.color.lightText};
    }
  }

  .newsletter-text {
    font-size: 1.8rem;

    &__emoji {
      margin-right: 0.5rem;
    }
  }
`

const EmailInput = ({ centered }) => {
  return (
    <Wrapper centered={centered}>
      <form id="newsletter">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Adres email"
          aria-label="Adres email"
        />
        <button type="submit" className="newsletter-submit">
          Zapisz
        </button>
      </form>
      <span className="newsletter-text">
        <span
          className="newsletter-text__emoji"
          role="img"
          aria-label="Party popper emoji"
        >
          🎉
        </span>
        Dołącz do newslettera i poznawaj na bieżąco świat JS'a!
      </span>
    </Wrapper>
  )
}

export default EmailInput
