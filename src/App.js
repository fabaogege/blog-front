/*import React from 'react';
import Router from './Router';

function App() {
    return();
}*/
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Tag from './Tag';

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2}/>
                    <Route path="/Tag" component={Tag}/>
                </div>
            </Router>
        );
    }
}
export default App;
