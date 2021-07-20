import React, { Component } from 'react'

class AddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date:'',
            place:'',
            type:'Tropic'
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;

        this.setState((prevState) => {
            return{
                ...prevState,
                [name]:value
            }
        });
    }

    handleSubmit(event){
        this.props.onAdd(this.state)
        console.log(this.state);
        this.setState({
            date:'',
            place:'',
            type:'Tropic'
        });
        event.preventDefault();
    }

    render() {
        return (
            
                <div className="form-container">
                    <div className="trip-form">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Date:
                            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                            </label>
                            <label>
                            Place:
                            <input type="text" name="place" value={this.state.place} onChange={this.handleChange}/>
                            </label>
                            <label>
                            type:
                            <select value={this.state.type} name="type" onChange={this.handleChange}>
                                <option value="Tropic" defaultValue>Tropic</option>
                                <option value="Trek">Trek</option>
                                <option value="Club">Club</option>
                            </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                </div>
            
        )
    }
}

export default AddComponent;