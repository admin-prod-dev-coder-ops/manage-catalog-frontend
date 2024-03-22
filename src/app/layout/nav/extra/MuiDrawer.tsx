import { Box, Button, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react"


export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setIsDrawerOpen(newOpen);
      };
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
            >
                  <Button onClick={toggleDrawer(true)}>Dashboard</Button> 
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='250px'
                    textAlign='center'
                    role='presentation'>
                    <Typography
                        variant="h6"
                        component='div'>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}