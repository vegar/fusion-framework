import { StrictMode } from 'react';

import AppRouter from './Router';

export const App = () => {
    return (
        <StrictMode>
            <h1>🚀 Hello Fusion😎</h1>
            <AppRouter />
        </StrictMode>
    );
};

export default App;
