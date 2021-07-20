import React, { Component } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaBeer, FaMountain } from 'react-icons/fa';

class HomeComponent extends Component {


    render() {
        var tropic = this.props.trips.filter((trip) => { if (trip.type === 'Tropic') return trip });
        var trek = this.props.trips.filter((trip) => { if (trip.type === 'Trek') return trip });
        var club = this.props.trips.filter((trip) => { if (trip.type === 'Club') return trip });

        return (
            <>
                <div className="container">
                    <div className="home-container">
                        <div className="home-item"></div>
                        <div className="home-item"><div className="home-num1">{this.props.trips.length}</div><div className="home-text">Trips</div></div>
                        <div className="home-item"></div>
                        <div className="home-item"><div className="home-num">{tropic.length}</div><div className="home-text"><FiSun /></div></div>
                        <div className="home-item"><div className="home-num">{trek.length}</div><div className="home-text"><FaMountain /></div></div>
                        <div className="home-item"><div className="home-num">{club.length}</div><div className="home-text"><FaBeer /></div></div>

                    </div>


                </div>

            </>
        )
    }
}

export default HomeComponent