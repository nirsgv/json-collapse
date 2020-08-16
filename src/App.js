import React, {useReducer, useEffect, useState} from 'react';
import * as styled from './styledComponents';
import reducer from './reducer';


const getInitialState = () => ({
    urlTextInput: '',
    treeData: {},
    isPreloader: false
});


function List({children}) {
    const [menuOpened, setMenuOpened] = useState(true);
    const toggleMenu = (e) => {
        e.stopPropagation();
        setMenuOpened(!menuOpened);
    }
    return (
        <>
            {children.length > 0 && <button type='button' onClick={toggleMenu}>
                {menuOpened ? '-' : '+'}
            </button>}
            <ul style={{display: menuOpened ? 'block' : 'none'}}>
                {children}
            </ul>
        </>
    )
}

function RecursiveMenu({treeData}) {

    let i = 0;
    const recursiveMenuFunc = (node) => {
        if (node) {
            if (typeof node === 'object') {
                const treeDataArray = Object.values(node);
                return(
                <li key={++i}>
                    <List>
                        {treeDataArray.map(recursiveMenuFunc)}
                    </List>
                </li>
                )
            } else {
                return <li key={++i}><span>{node}</span></li>;
            }
        } else {
            return null;
        }
    }

    return (
        <ul>
            {recursiveMenuFunc(treeData)}
        </ul>
    )
}

function JsonRetriever({urlText, setTreeData, setPreloader, isPreloader}) {

    const fetchdata = async (url) => {
        if (!url) return;
        setPreloader(true);
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setTreeData(data)
            });
        setPreloader(false);
    }

    return (
        <div>
            <button type='button' onClick={() => fetchdata(urlText)}>{!isPreloader ? 'Get Data!' : 'Spin!'}</button>
        </div>
    )
}

const DUMMY_URLS = {
    PETS: 'https://petstore.swagger.io/v2/swagger.json',
    DOG: 'https://dog.ceo/api/breeds/list/all'
}

function TreeRenderer() {

    const [state, dispatch] = useReducer(reducer, getInitialState());
    const {urlTextInput, isPreloader, treeData} = state;


    const setUrlTextInput = (e) => {
        dispatch({type: 'SET_URL_TEXT_INPUT', payload: e.target.value})
    }

    const setDummyUrlTextInput = (url) => {
        dispatch({type: 'SET_URL_TEXT_INPUT', payload: url})
    }

    const setTreeData = (treeDate) => {
        dispatch({type: 'SET_TREE_DATA', payload: treeDate})
    }

    const setPreloader = (bool) => {
        dispatch({type: 'SET_PRELOADER', payload: bool})
    }

    return (
        <>
            <styled.Header>
                <styled.TextInput type="text" value={urlTextInput} onChange={setUrlTextInput} placeholder='Please provide a valid api endpoint url.'/>
            </styled.Header>
            <styled.DummyUrlsWrap>
                <styled.Dl>
                    <styled.Dt>Dummy urls:</styled.Dt>
                    <styled.Dd>
                        <button type='button' onClick={() => setDummyUrlTextInput(DUMMY_URLS['PETS'])}>1</button>
                        <button type='button' onClick={() => setDummyUrlTextInput(DUMMY_URLS['DOG'])}>2</button>
                    </styled.Dd>
                </styled.Dl>
            </styled.DummyUrlsWrap>
            <styled.ButtonWrap>
                <JsonRetriever urlText={urlTextInput} setTreeData={setTreeData} setPreloader={setPreloader} isPreloader={isPreloader}/>
            </styled.ButtonWrap>
            <styled.Main>
                <RecursiveMenu treeData={treeData}/>
            </styled.Main>


        </>
    )
}


function App() {
    return (
        <styled.AppContainer>
            <TreeRenderer/>
        </styled.AppContainer>
    );
}

export default App;
