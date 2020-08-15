import React, { useReducer } from 'react';
import * as styled from './styledComponents';
import reducer from './reducer';




const getInitialState = () => ({
  urlTextInput: '',
});




function MenuFetcher({ urlText }) {


    return (
        <div>
            {urlText}
        </div>
    )
}

function Menufier() {

  const [ state, dispatch ] = useReducer(reducer, getInitialState());

    const setUrlTextInput = (e) => {
        dispatch({type: 'SET_URL_TEXT_INPUT', payload: e.target.value})
    }

  return (
      <>
          <styled.Header>
              <input type="text" onChange={setUrlTextInput}/>
          </styled.Header>
          <styled.Main>

              <MenuFetcher urlText={state.urlTextInput} />

          </styled.Main>

      </>
  )
}


function App() {
  return (
    <styled.AppContainer>
      <Menufier />
    </styled.AppContainer>
  );
}

export default App;
