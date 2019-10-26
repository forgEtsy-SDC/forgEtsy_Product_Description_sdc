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
            listing_id: this.props.match.params.productId,
            title: '',
            price: '',
            description: '',
            shopName: '',
            shopIconURL: '',
            shopStars: '',
            productOptions: [],
            descriptionVisible: false
        }

        this.getProductInfo = this.getProductInfo.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.updateLocation);
        this.updateLocation();
    }

    getProductInfo(productIdParam) {
        const productId = productIdParam ? productIdParam : this.state.listing_id;
        axios.get(`http://ec2-18-224-213-224.us-east-2.compute.amazonaws.com/api/listing/${productId}`)
            .then(({ data }) => {
                if (data.type !== 'Error') {
                    this.setState({
                        title: unescape(data.title),
                        price: data.price,
                        description: unescape(data.description),
                        shopName: unescape(data.Shop.shop_name),
                        shopId: data.Shop.shop_id,
                        shopStars: data.Shop.custom_shops_state,
                        productOptions: data.product_options
                    })
                }
            })
            // UPDATE with approperiate error handling
            .catch(err => console.log(err))
    }

    updateLocation() {
        let productId = window.location.pathname;
        productId = productId.replace(/\//, '');
        if (Number(productId) !== this.state.productId) {
            this.getProductInfo(productId);
            this.setState({ listing_id: productId })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.updateLocation);
    }

    render() {
        return (
            <div className={Style.wrapper}>

                <BuyBox
                    title={this.state.title}
                    price={this.state.price}
                    shopName={this.state.shopName}
                    shopId={this.state.shopId}
                    shopStars={this.state.shopStars}
                    productOptions={this.state.productOptions}
                />

                <hr className={Style.hr}></hr>

                <ListingOverview
                    description={this.state.description}
                />

                <hr className={Style.hr}></hr>

                <ShippingInfo
                    shopId={this.state.shopId}
                />

                <SellerInfo
                    shopName={this.state.shopName}
                    shopId={this.state.shopId}
                />

                <FAQs />

            </div>
        )
    }
}

export default App;