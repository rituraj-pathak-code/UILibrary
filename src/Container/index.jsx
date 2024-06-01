import React from 'react'
import { Box, Grid } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import style from "./index.module.css"

const Container = ({ children }) => {
    const navigate= useNavigate()

    const handleNavigate = (menuItem , index) => {
        navigate(menuItem?.route)
    }
    return (
        <Grid container>
            <Grid item xs={12} sx={{background:'white', padding:'12px 16px', borderBottom:'1px solid #E8E8E8'}}>
                TopBar
            </Grid>
            <Grid item xs={12} className={style.container}>
                <Box>
                    <Sidebar handleNavigate={handleNavigate}/>
                </Box>
                <Box style={{minWidth:"77%"}}>
                    {children}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Container