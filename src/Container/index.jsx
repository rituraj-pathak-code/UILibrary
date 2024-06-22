import React from 'react'
import { Box, Grid } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import style from "./index.module.css"
import Topbar from '../components/Topbar'

const Container = ({ children }) => {
    const navigate= useNavigate()

    const handleNavigate = (menuItem , index) => {
        navigate(menuItem?.route)
    }
    return (
        <Grid container>
            <Topbar/>
            <Grid item xs={12} className={style.container}>
                <Box>
                    <Sidebar handleNavigate={handleNavigate}/>
                </Box>
                <Box style={{minWidth:"79%", marginLeft: "18%", marginTop: '60px'}}>
                    {children}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Container