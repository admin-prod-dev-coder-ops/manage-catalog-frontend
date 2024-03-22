import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function MuiNavBar() {
    return (
        <React.Fragment>
             <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo">
                        <ShoppingBagIcon />
                        <Typography variant="h6" 
                            component='div'
                            sx={{flexGrow:1}}>
                            Manage Catalog
                        </Typography>
                        <Stack direction={"row"}
                        spacing={2}>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Login</Button>
                        </Stack>
                    </IconButton>
                </Toolbar>

            </AppBar>
            </Box>

        </React.Fragment>
    )
}