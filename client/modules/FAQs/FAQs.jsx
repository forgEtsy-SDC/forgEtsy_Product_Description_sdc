import React, { Component } from 'react';
import Style from './FAQs.css';

import Question from './Question/Question';

class FAQs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faqs: [
                {
                    question: 'Sizing details',
                    answer: 'We currently only have one size, for adults only. No ties for kids available, but it will\nBe implemented in the future.'
                },
                {
                    question: 'Custom and personalized orders',
                    answer: 'We can create a gift message in the box as a small letter!\nYou can tell us what you would like us to write!'
                },
                {
                    question: 'Return Policy',
                    answer: 'If you find any problems with our product we will issue you a full refund as soon as you have shipped it back to us. However we would not cover the cost of shipping for returns. If you would like to exchange the product, we ask that you message us so we can work with you on covering the shipping cost. '
                },
                {
                    question: 'How do I build my own box?',
                    answer: 'You can add the personalization to the Build your own box on the comments for the item or we encourage you to message us! You could even send us the link to each item you’d like for your box. '
                },
            ],
            faqsVisible: false
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        console.log(event.target);
        this.setState({ faqsVisible: !this.state.faqsVisible })
    }

    render() {
        return (
            <div className={Style.faq_wrapper}>

                <h2 className={Style.botton_wrapper}>
                    {/* Button needs to trigger visibility AND overflow */}
                    <button className={Style.button} onClick={this.handleOnClick}>

                        <div className={Style.button_text}>FAQs</div>

                        <span className={Style.span}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false' className={Style.svg}>
                                <path d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' className={Style.path}></path>
                            </svg>
                        </span>

                    </button>
                </h2>

                <div className={Style.questions_wrapper, this.state.faqsVisible ? Style.questions_wrapper_visible : Style.questions_wrapper_hidden}>
                    <div className={Style.questions_wrapper_inner}>

                        {this.state.faqs.map((question, i) => <Question key={i} id={i} question={question} handleOnClick={this.handleOnClick} visible={this.state.faqsVisible ? true : false} />)}

                    </div>
                </div>

            </div>
        );
    }
}

export default FAQs;