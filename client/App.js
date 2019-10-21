import React, { Component } from 'react';
import Style from './App.css';
import axios from 'axios';
import unescape from 'lodash.unescape';

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
                        title: unescape(data.title),
                        price: data.price,
                        description: unescape(data.description),
                        shopName: unescape(data.Shop.shop_name),
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
                <div id='data-buy-box'></div>
                <hr></hr>
                <div id='listing-overview'></div>
                <hr></hr>
                <div id='shipping-info'></div>
                <div id='seller-info'></div>
            </div>
        );
    }
}

export default App;