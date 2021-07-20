import React, { Component } from 'react'

class HomeComponent extends Component {
    
    
    render() {
        var tropic = this.props.trips.filter((trip) => {if(trip.type === 'Tropic') return trip}) ;
        var trek = this.props.trips.filter((trip) => {if(trip.type === 'Trek') return trip}) ;
        var club = this.props.trips.filter((trip) => {if(trip.type === 'Club') return trip}) ;       
        console.log(club);
        return (
            <>
                <div>
                    {this.props.trips.length},{tropic.length},{trek.length},{club.length}
                    
                </div>
                
            </>
        )
    }
}

export default HomeComponent