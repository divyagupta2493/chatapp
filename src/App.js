import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginFrom from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>
    return (
        <ChatEngine
            height="100vh"
            projectID="3c98a900-af07-4ac1-aae2-12e04649879c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;