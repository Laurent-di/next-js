import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PageNotFound = () => {
  return (
    <StyledPage>
      <h1>404 The page is not found.</h1>
    </StyledPage>
  );
};

export default PageNotFound;
