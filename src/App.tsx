import React from 'react';
import {Toolbar} from "./components/Toolbar";
import {SplitContainer} from "./components/SplitContainer";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Toolbar></Toolbar>
                <SplitContainer
                    imagePosition={"right"}
                    imageUrl={process.env.PUBLIC_URL + '/images/CDJ.jpg'}
                    isStatic={true}>
                </SplitContainer>
                <SplitContainer
                    imagePosition={"left"}
                    imageUrl={process.env.PUBLIC_URL + '/images/CDJ.jpg'}
                    isStatic={false}>
                </SplitContainer>
            </header>
        </div>
    );
}

export default App;