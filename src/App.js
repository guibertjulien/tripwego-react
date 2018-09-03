import React, {Component} from 'react'
import './App.css'
import TripAppBar from "./components/TripAppBar";
import TripCard from "./components/TripCard";
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <div>
                <TripAppBar counter={10}/>
                <Grid container spacing={24}>
                    <TripCard
                        title={'trip #1'}
                        desc={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}/>
                    <TripCard
                        title={'trip #2'}
                        desc={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}/>
                    <TripCard
                        title={'trip #3'}
                        desc={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}/>
                    <TripCard
                        title={'trip #4'}
                        desc={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}/>
                </Grid>
            </div>
        )
    }
}

export default App