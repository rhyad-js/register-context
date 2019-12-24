import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles/NavBarStyles';
import {ThemeContext} from './contexts/ThemeContext';
import {LanguageContext} from './contexts/LanguageContext';

const content = {
    english: {
        search: "Search...",
        flag: "☕"
    },
    french: {
        search: "Chercher...",
        flag: "🎨"
    },
    spanish: {
        search: "Buscar...",
        flag: "💃"
    }
}

const NavBar = props => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const {classes} = props;
    const {search, flag} = content[language];
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "secondary" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        {flag}
                    </IconButton>
                    <Typography 
                        className={classes.title}
                        variant="h6"
                        color="inherit">
                        {language.toUpperCase()}
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <Typography 
                        className={classes.title}
                        variant="h6"
                        color="inherit">
                        React Context Application - Using Hooks
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder={search} classes={{root: classes.inputRoot, input: classes.inputInput}} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);