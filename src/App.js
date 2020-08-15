import React, {useReducer, useEffect, useState} from 'react';
import * as styled from './styledComponents';
import reducer from './reducer';


const getInitialState = () => ({
    // urlTextInput: 'https://pokeapi.co/api/v2/pokemon/ditto',
    urlTextInput: 'https://dog.ceo/api/breeds/list/all',
    // urlTextInput: '',
    treeData: [
        {
            name: "vegetables",
            children: [{name: "cucumber"}, {
                name: "lettuce",
                name2: "asd",
                name3: "sdf",
                children: ["green", "purple", "arabic"]
            }]
        },
        {
            name: "meat",
            children: [{name: "cow"}, {name: "chicken"}, {
                name: "donkey",
                children: [{name: "male"}, {
                    name: "female",
                    children: [{name: "fat"}, {name: "thin", children: [{name: "tall"}, {name: "short"}]}]
                }]
            }]
        },
        {name: "fish", children: [{name: "tuna"}, {name: "salmon"}, {name: "bass"}]}
    ],
    isPreloader: false
});


function Ul({children}) {

    const [menuOpened, setMenuOpened] = useState(true);
    const toggleMenu = (e) => {
        e.stopPropagation();
        setMenuOpened(!menuOpened);
    }

    return (
        <>
            <a onClick={toggleMenu}>{menuOpened ? 'x' : '+'}</a>
            <ul style={{display: menuOpened ? 'block' : 'none'}}>
                {children}
            </ul>
        </>
    )
}

function RecursiveMenu({treeData}) {

    let i = 0;

    function recursiveMenuFunc(treeData) {
        if (treeData) {
            if (typeof treeData === 'object') {
                const treeDataArray = Object.values(treeData);
                return treeDataArray.length > 0 && <li key={++i}><Ul>
                    {treeDataArray.map(recursiveMenuFunc)}
                </Ul></li>
            } else {
                return <li key={++i}>{treeData}</li>;
            }
        } else {
            return null;
        }

    }


    // console.log(treeData);
    let returnedData = recursiveMenuFunc(treeData);
    // console.log(returnedData);
    return (
        <ul>
            {returnedData}
        </ul>
    )
}

function MenuFetcher({urlText, setTreeData, setPreloader, isPreloader}) {

    const fetchdata = async (url) => {
        setPreloader(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPreloader(false);
                setTreeData(data)
            });
    }

    return (
        <div>
            <button type='button' onClick={() => fetchdata(urlText)}>{!isPreloader ? 'Get Data!' : 'Spin!'}</button>
        </div>
    )
}

function Menufier() {

    const [state, dispatch] = useReducer(reducer, getInitialState());
    const {urlTextInput, isPreloader, treeData} = state;


    const setUrlTextInput = (e) => {
        dispatch({type: 'SET_URL_TEXT_INPUT', payload: e.target.value})
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
                <input type="text" value={urlTextInput} onChange={setUrlTextInput}/>
            </styled.Header>
            <MenuFetcher urlText={urlTextInput} setTreeData={setTreeData} setPreloader={setPreloader}
                         isPreloader={isPreloader}/>
            <styled.Main>
                <RecursiveMenu treeData={treeData}/>
            </styled.Main>


        </>
    )
}


function App() {
    return (
        <styled.AppContainer>
            <Menufier/>
        </styled.AppContainer>
    );
}

export default App;
