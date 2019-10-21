import React, { Component } from 'react';
import Style from './App.css';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 173033626,
            title: '',
            price: '',
            description: '',
            shopName: '',
            shopIconURL: '',
            custom_shops_state: ''
        }
    }

    componentDidMount() {
        axios.get(`http://ec2-18-224-213-224.us-east-2.compute.amazonaws.com/api/listing/${this.state.listing_id}`)
            .then(({ data }) => {
                console.log(data);

                if (data.type !== 'Error') {
                    this.setState({
                        title: data.title,
                        price: data.price,
                        description: data.description,
                        shopName: data.Shop.shop_name,
                        shopIconURL: data.Shop.icon_url_fullxfull,
                        custom_shops_state: data.Shop.custom_shops_state
                    })
                }
            })
            // UPDATE with approperiate error handling
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.price}</h2>
                <p>{this.state.description}</p>
                <p>{this.state.shopName}</p>
                <p>{this.state.shopIconURL}</p>
                <p>{this.state.custom_shops_state}</p>
            </div>
        );
    }
}

export default App;