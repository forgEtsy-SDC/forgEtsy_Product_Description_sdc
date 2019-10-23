import React, { Component } from 'react';
import Style from './App.css';
import axios from 'axios';
import unescape from 'lodash.unescape';

import BuyBox from './modules/BuyBox/BuyBox';
import ListingOverview from './modules/ListingOverview/ListingOverview';
import ShippingInfo from './modules/ShippingInfo/ShippingInfo';
import SellerInfo from './modules/SellerInfo/SellerInfo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 656660118,
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

                <div className={Style.faq_wrapper}>

                    <h2 className={Style.botton_wrapper}>
                        {/* Button needs to trigger visibility AND overflow */}
                        <button className={Style.button}>

                            <div className={Style.button_text}>FAQs</div>

                            <span className={Style.span}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false' className={Style.svg}>
                                    <path d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' className={Style.path}></path>
                                </svg>
                            </span>

                        </button>
                    </h2>

                    <div className={Style.questions_wrapper}>
                        <div className={Style.questions_wrapper_inner}>

                            <div className={Style.question_one_wrapper}>

                                <h3 className={Style.question_one_button_wrapper}>
                                    {/* Button needs to trigger visibility AND overflow */}
                                    <button className={Style.button}>

                                        <span className={Style.question_one_button_text}>Sizing details</span>

                                        <div>
                                            <span className={Style.span}>
                                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false' className={Style.svg}>
                                                    <path d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' className={Style.path}></path>
                                                </svg>
                                            </span>
                                        </div>

                                    </button>
                                </h3>

                                <div className={Style.question_one_answer}>
                                    We currently only have one size, for adults only. No ties for kids available, but it will
                                    <br></br>
                                    Be implemented in the future.
                                </div>

                            </div>

                            <div></div>

                            <div></div>

                            <div></div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default App;