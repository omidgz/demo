import React from 'react';
import {Nav, Container} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Nav>Welcome to my awesome demo app</Nav>
			<Container className='p-3'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<h2>Index</h2>} />
						<Route path='/test' element={<h2>TEST</h2>} />
					</Routes>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
