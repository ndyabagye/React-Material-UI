import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import MenuIcon from '@material-ui/icons/Menu';
import React from "react"

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles()

    return (<AppBar position="static" color="secondary">
        <Toolbar>
            <Typography className={classes.typographyStyles} variant="h6">
                Header
            </Typography>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>)
}

export default Header