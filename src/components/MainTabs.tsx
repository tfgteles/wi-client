import * as React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MainTabs() {
    const [selectedTab, setSelectedTab]= React.useState(0);
    const navigate = useNavigate();

    const routes: string[] = ['/home', '/play'];

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
        setSelectedTab(newTab);
        navigate(routes[newTab]);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab label="Home" />
                <Tab label="Play" />
            </Tabs>
        </Box>
    );
}
