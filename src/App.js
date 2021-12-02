import './App.css';
import config from './config'
import {PublicClientApplication} from '@azure/msal-browser'

const clientApplication = new PublicClientApplication({
    auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
})

const login = async () => {
    try {
        await clientApplication.loginPopup({
            scopes: config.scopes,
            prompt: 'select_account'
        })
    } catch (e) {
        console.warn(`AUTH ERROR: ${e.message}`)
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={login}>
                    Login
                </button>
            </header>
        </div>
    );
}

export default App;
