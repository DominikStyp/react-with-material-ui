import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function MyGridElement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="data:image/jpeg;base64,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" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
