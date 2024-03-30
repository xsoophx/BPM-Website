import React from 'react';
import {Toolbar} from "./components/Toolbar";
import {SplitContainer} from "./components/SplitContainer";
import {ImageContext, imageContextValue} from "./contexts/ImageContext";
import {leftTextProps, rightTextProps} from "./texts/texts";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Toolbar></Toolbar>
                <ImageContext.Provider value={imageContextValue}>
                    <SplitContainer
                        imagePosition={"right"}
                        isStatic={true}
                        textProps={leftTextProps}>
                    </SplitContainer>
                    <SplitContainer
                        imagePosition={"left"}
                        isStatic={false}
                        textProps={rightTextProps}>
                    </SplitContainer>
                </ImageContext.Provider>
            </header>
        </div>
    );
}

export default App;