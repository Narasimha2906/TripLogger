import React, { PureComponent } from 'react'

class ListComponent extends PureComponent {
   

    render() {
        return (
            <div>
            {this.props.triplist.map((trip,index) => {
                return <ul key={index}>{trip.date} {trip.place}  {trip.type}</ul>
            })}
            </div>
        )
    }
}

export default ListComponent;