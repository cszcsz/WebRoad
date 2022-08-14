import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Java from './java';
import JavaScript from './javascript';
import TypeScript from './typescript';
import Python from './python';


class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path='/java' element={<Java />} />
                        <Route path='/javascript' element={<JavaScript />} />
                        <Route path='/typescript' element={<TypeScript />} />
                        <Route path='/python' element={<Python />} />
                    </Routes>
                </div>

            </React.Fragment>
        );
    }
}

export default App;