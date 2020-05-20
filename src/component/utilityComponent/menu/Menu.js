import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { setCategoryDataFilter } from '../../../store/actions/category';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const MenuListComposition = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event, data) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        // props.setFilter(
        //     {
        //         genres: [],
        //         certifiactes: [],
        //         searchAll: true,
        //         primary_release_date_lt: new Date().toISOString().slice(0, 10),
        //         primary_release_date_gt: new Date().toISOString().slice(0, 10),
        //         language: "",
        //         userScore: [0, 10],
        //         minUserVotes: [0],
        //         runTime: [0, 360]
        //     }
        // );
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{ color: "white", fontSize: "small" }}
                >
                    {props.menuTitle}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {
                                            props.menuOptions.map(currentOptions => {
                                                return (
                                                    < MenuItem onClick={(event) => handleClose(event, currentOptions.data)}>
                                                        <Link href={currentOptions.href} color="inherit">
                                                            {currentOptions.title}
                                                        </Link>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}

// const mapDispatchtoprops = (dispatch) => {
//     return {
//         setFilter: (filterObject) => { dispatch(setCategoryDataFilter(filterObject)) }
//     }
// }

export default MenuListComposition