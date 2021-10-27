import { AppBar, Container, createTheme, MenuItem, Select, Toolbar, Typography,ThemeProvider } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'
import { CryptoState } from '../CryptoContext'

const Header = () => {

    const {currency,setCurrency} = CryptoState();

    const history = useHistory();

    

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark",
        },
    })

    const useStyles = makeStyles(() => ({
        Title:{
            flex:1,
            color:"gold",
            fontFamily:"Montserrat",
            fontWeight:"bold",
            cursor:"pointer"
        },
    }));

    const classes = useStyles();


    return (<ThemeProvider theme={darkTheme}>
       <AppBar color='transparent' position='static'>
            <Container>
               <Toolbar>
                   <Typography variant="h5" className={classes.Title}>
                       Crypto-Zone
                   </Typography>
                   <Select variant='outlined' style={{
                       width:100,
                       height:40,
                       marginRight:15,
                       
                   }} value={currency}
                   onChange={(e) => setCurrency(e.target.value)}>
                       <MenuItem value={"USD"}>USD</MenuItem>
                       <MenuItem value={"INR"}>INR</MenuItem>
                   </Select>
               </Toolbar>
            </Container>
       </AppBar>
       </ThemeProvider>
    )
}

export default Header
