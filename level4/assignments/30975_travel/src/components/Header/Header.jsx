
import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.container}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h1" className={classes.title}>
                    Dave's Travel App
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." classes={{root:classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Header;