import styled from 'styled-components';


const AppContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  padding: 32px 0;
`

const Main = styled.main`
    background-color: #eee;
    padding: 1rem 0;
    flex-grow: 1;
`

const TextInput = styled.input`
    background-color: #eee;
    width: 400px;
    padding: 16px;
    border-radius: 5px;
`

const ButtonWrap = styled.section`
    background-color: #fff;
    padding: 16px;
`

const DummyUrlsWrap = styled.section`
    background-color: #282c34;
    border-top: 1px solid #ffffff55;
    padding: 16px;
    display: flex;
    justify-content: center;
`
const Dl = styled.dl`
    display: flex;
    width: 200px;
    justify-content: space-between'
`
const Dt = styled.dt`
    display: inline-block;
    color: #fff;
`
const Dd = styled.dd`
    display: inline-block;
`

export {
    AppContainer,
    Header,
    DummyUrlsWrap,
    Main,
    TextInput,
    ButtonWrap,
    Dl,
    Dt,
    Dd
}