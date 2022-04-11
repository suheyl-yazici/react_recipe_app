
import React from 'react'
import { FormContainer, LoginContainer, StyledImg ,Header, StyledForm, StyledInput, StyledButton} from './LoginStyles'
import mealSvg from "../../assets/meal.svg";

const Login = () => {

  const user = {
    username : "user",
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/home";
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder='Username' required/>
          <StyledInput type="password" placeholder='password' required />
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login