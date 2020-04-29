import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import StateExample from './pages/state-example/StateExample.component';
import PropsExample from './pages/props-example/PropsExample.component';
import Todolist from './pages/todo-list/todolist.component'

function App() {
    return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage}/>
				<Route exact path='/stateexample' component={StateExample}/>
				<Route exact path='/propsexample' component={PropsExample}/>
				<Route exact path='/todolist' component={Todolist}/>
			</Switch>
		</div>
    );
}

export default App;
