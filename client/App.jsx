import React, { Component } from 'react';
import Style from './App.css';
import axios from 'axios';
import unescape from 'lodash.unescape';

import BuyBox from './modules/BuyBox/BuyBox';
import ListingOverview from './modules/ListingOverview/ListingOverview';
import ShippingInfo from './modules/ShippingInfo/ShippingInfo';
import SellerInfo from './modules/SellerInfo/SellerInfo';
import FAQs from './modules/FAQs/FAQs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 269709264,
            title: '',
            price: '',
            description: '',
            shopName: '',
            shopIconURL: '',
            shopStars: '',
            productOptions: []
        }
    }

    componentDidMount() {
        axios.get(`http://ec2-18-224-213-224.us-east-2.compute.amazonaws.com/api/listing/${this.state.listing_id}`)
            .then(({ data }) => {
                if (data.type !== 'Error') {
                    this.setState({
                        title: unescape(data.title),
                        price: data.price,
                        description: data.description,
                        shopName: unescape(data.Shop.shop_name),
                        shopIconURL: data.Shop.icon_url_fullxfull,
                        shopStars: data.Shop.custom_shops_state,
                        productOptions: data.product_options
                    })
                }
            })
            // UPDATE with approperiate error handling
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className={Style.wrapper}>

                <BuyBox
                    title={this.state.title}
                    price={this.state.price}
                    shopName={this.state.shopName}
                    shopStars={this.state.shopStars}
                    productOptions={this.state.productOptions}
                />

                <hr className={Style.hr}></hr>

                <ListingOverview
                    description={this.state.description}
                />

                <hr className={Style.hr}></hr>

                <ShippingInfo />

                <SellerInfo
                    shopName={this.state.shopName}
                    shopIconURL={this.state.shopIconURL}
                />

                <FAQs />

            </div>
        )
    }
}

export default App;