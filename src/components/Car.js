import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import  { Container, Paper, Chip } from '@material-ui/core'
// Container, Paper, Chip //

const Car = (props) => {
let id = props.match.params.id;

const car = cars.find(car => car.id === Number(id));

console.log(car)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper elevation={3} className="car-paper">
                <h1>{car.Name}</h1>
                {
                    Object.keys(car).map((key, index) => {
                        return <Chip className="car-chip" label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container> 
    )
}

export default Car