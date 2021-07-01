import React from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
import Header from './Header';
import InputField from './CreateNote';

const App = () => {
    return <>
        <Header />
        <main>
            <InputField />
        </main>
    </>;
};

export default App;