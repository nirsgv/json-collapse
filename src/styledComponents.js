import styled from 'styled-components';


const AppContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
    padding: 1rem 0;
`

const Main = styled.main`
    background-color: #eee;
    padding: 1rem 0;
    flex-grow: 1;
`


export {
    AppContainer,
    Header,
    Main,
}