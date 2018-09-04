import React, {Component} from 'react'
import './App.css'
import TripAppBar from "./components/TripAppBar";
import TripCard from "./components/TripCard";
import Grid from '@material-ui/core/Grid';
import shuffle from 'lodash.shuffle';

class App extends Component {
    handleCardClick() {
        console.log('clicked');
    }

    trips = this.generateTrips();

    generateTrips() {
        let result = [
            {id: 1, title: 'PARIS', shared: true},
            {id: 2, title: 'NANTES', shared: false},
            {id: 3, title: 'NICE', shared: false},
            {id: 4, title: 'BORDEAUX', shared: true},
        ]

        return shuffle(result);
    }

    render() {
        let desc = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';
        return (
            <div>
                <TripAppBar counter={10}/>
                <Grid container spacing={24}>
                    {this.trips.map((trip, index) => (
                        <TripCard key={index} title={trip.title} desc={desc} onClick={this.handleCardClick}
                                  shared={true}/>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default App