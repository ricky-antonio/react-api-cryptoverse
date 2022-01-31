
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

import './App.css';

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/cryptoverse/" element={<Homepage />} />
							{/* <Route exact path="/cryptoverse/exchanges" element={<Exchanges />} /> */}
							<Route exact path="/cryptoverse/cryptocurrencies" element={<Cryptocurrencies />} />
							<Route exact path="/cryptoverse/crypto/:coinId" element={<CryptoDetails />} />
							<Route exact path="/cryptoverse/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title level={5} style={{ color: '#fff', textAlign: 'center' }} >
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/cryptoverse/">Home</Link>
						<Link to="/cryptoverse/cryptocurrencies">Cryptocurrencies</Link>
						<Link to="/cryptoverse/news">News</Link>
					</Space>
				</div>
			</div>

		</div>
	);
}

export default App;
