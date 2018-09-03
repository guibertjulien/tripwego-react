import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        maxWidth: 345,
        margin: 10
    },
    media: {
        opacity: 0.5,
        height: 300,
    },
};

const TripCard = ({classes, title, desc}) => (
    <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/expedia.jpeg"
                    title="Expedia"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    </Grid>
)

TripCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    desc: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripCard);