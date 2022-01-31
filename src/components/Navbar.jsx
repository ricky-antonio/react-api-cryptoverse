import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize()

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);



    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)} >
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/" onClick={() => setActiveMenu(!activeMenu)}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies" onClick={() => setActiveMenu(!activeMenu)}>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges" onClick={() => setActiveMenu(!activeMenu)}>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item key="news" icon={<BulbOutlined />}>
                        <Link to="/news" onClick={() => setActiveMenu(!activeMenu)}>News</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    );
};

export default Navbar;
