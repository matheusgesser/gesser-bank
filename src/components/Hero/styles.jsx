import styled from "styled-components";

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 80vw;
  text-align: center;
  margin-top: 7rem;
  @media (max-width:700px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  width: 60%;
  font-size: 3rem;
  font-weight: 800;
  text-overflow: ellipsis;
  @media (max-width:700px) {
    word-break: break-all;
    width: 90%;
    font-size: 2.5rem;
  }
`

export const Description = styled.p`
  width: 40vw;
  text-align: center;
  @media (max-width:700px) {
    width: 90%;
  }
`

export const VisualContent = styled.section`
  padding: 2.5rem 0;
  position: relative;
  @media (max-width:700px) {
    padding: 2rem 0;
  }
`

export const MainPicture = styled.img`
  width: 80vw;
  max-width: 60rem;
  height: 35rem;
  border-radius: 30px;
  object-fit: cover;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.3));
`

export const Card = styled.aside`
  height: 16rem;
  width: 14rem;
  background: linear-gradient(140deg, #fff, #eee);
  position: absolute;
  top: 20px;
  right: -20px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 20px;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.1));
  & h4 {
    font-size: 0.8rem;
    color: #595959;
  }
  & strong {
    color: #090909;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0.5rem 0 auto 0;
  }
  & strong svg {
    font-size: 0.9rem;
    color: #060;
  }
  & button {
    padding: .7rem 1rem;
    background: none;
    color: #000;
    font-weight: 600;
    font-family: 'Inter';
    border: 1px solid #bbb;
    border-radius: 30px;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  & button svg {
    font-size: 1.3rem;
  }
  @media (max-width:700px) {
    display: none;
  }
`

export const Comment = styled.aside`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute;
  background: #fff;
  padding: 0.5rem;
  padding-right: 1.5rem;
  border-radius: 166px;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1));

  & img {
    width: 3rem;
    border-radius: 50%;
  }
  & section {
    display: flex;
    flex-direction: column;
  }
  & strong {
    font-weight: 600;
  }
  & p {
    opacity: 0.8;
  }
  @media (max-width:700px) {
    & img {
      width: 2.5rem;
    }
  }
`