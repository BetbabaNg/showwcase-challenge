import styled from "styled-components";

export const HomeSec = styled.div`
  color: #fff;
  min-height: 100vh;
  padding: 160px 0;
  background-color: #4b59f7;
`;

export const HomeContainer = styled.div`
  background-color: #4b59f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeIntroduction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 150px;
`;

export const HomeSubHeading = styled.p`
  font-family: "Trebuchet Ms", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const HomeSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  } ;
`;

export const ErrorAlert = styled.p`
  position: relative;
  /* padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem; */
  color: #721c24;
  /* background-color: rgb(237 104 95 / 73%);
  border-color: #f5c6cb; */
`;

export const SuccessAlert = styled.p`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #8bc34a;
  border-color: #cddc39;
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const FormInput = styled.input`
  padding: 10px 50px;

  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #06194b;

  &::placeholder {
    color: #242424;
    margin-right: 60px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
