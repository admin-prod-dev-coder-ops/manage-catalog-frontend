import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { MenuDetailListItem } from './MenuDetailListItem';

const drawerWidth = 240;
const upperMenu = [
  { text: 'Products', iconName: 'shopping_bag', path: '/products' }, // Add path for Products
  { text: 'Inventory', iconName: 'inventory' },
  { text: 'Orders', iconName: 'receipt' },
  { text: 'Promotions', iconName: 'tag' },
];
const lowerMenu = [
  { text: 'Earnings', iconName: 'attach_money' },
  { text: 'Events', iconName: 'event' },
  { text: 'Pay Options', iconName: 'payment' },
  { text: 'Customers', iconName: 'group' },
];



export default function PermanentDrawerLeft() {
  return (
    <React.Fragment>
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Catalog Management
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>      
            <MenuDetailListItem key={upperMenu[0].text} text={upperMenu[0].text} iconName={upperMenu[0].iconName} path={upperMenu[0].path} />
            <MenuDetailListItem key={upperMenu[1].text} text={upperMenu[1].text} iconName={upperMenu[1].iconName} />
            <MenuDetailListItem key={upperMenu[2].text} text={upperMenu[2].text} iconName={upperMenu[2].iconName} />
            <MenuDetailListItem key={upperMenu[3].text} text={upperMenu[3].text} iconName={upperMenu[3].iconName} />           
          </List>
          <Divider />
          <List>
            <MenuDetailListItem key={lowerMenu[0].text} text={lowerMenu[0].text} iconName={lowerMenu[0].iconName} />
            <MenuDetailListItem key={lowerMenu[1].text} text={lowerMenu[1].text} iconName={lowerMenu[1].iconName} />
            <MenuDetailListItem key={lowerMenu[2].text} text={lowerMenu[2].text} iconName={lowerMenu[2].iconName} />
            <MenuDetailListItem key={lowerMenu[3].text} text={lowerMenu[3].text} iconName={lowerMenu[3].iconName} />
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}