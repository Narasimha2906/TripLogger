import React, { PureComponent } from 'react'

class ListComponent extends PureComponent {


    render() {
        return (
            <div className="container-1">
                <div className="list-container">
                    <div className="list-heading">All Trips</div>
                    <div className="list-content">
                        <div className="content-heading">
                            <div className="heading-items">Date</div>
                            <div className="heading-items">Place</div>
                            <div className="heading-items">Type</div>
                        </div>
                        <div className="list-items">
                            {this.props.triplist.map((trip, index) => {
                                return (
                                    <div className="main-list" key={index}>
                                        <div className="main-item">{trip.date}</div>
                                        <div className="main-item">{trip.place}</div>
                                        <div className="main-item">{trip.type}</div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default ListComponent;