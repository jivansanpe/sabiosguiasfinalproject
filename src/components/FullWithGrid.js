import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        root: {
            flexGrow: 1,
        },
    }),
);

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div style={{
            width: '100%', backgroundColor: 'lightgreen',
            padding: '10px'
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        Nuestros sabios
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><img width="100%" src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/GC_juancubas-150x150.png'></img></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><img width="100%" src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/GC_RubenPulidoGodoy1-150x150.png'></img></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><img width="100%" src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/GC_Ine%CC%81s-150x150.png'></img></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><img width="100%" src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/03/GC_ManuelRivero-150x150.png'></img></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><img width="100%" src='https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/01/Grayscale-Horses-Twitter-Header-2.png'></img></Paper>
                </Grid>
            </Grid>
        </div>
    );
}