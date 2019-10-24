import React, { Component } from 'react';
import Style from './Question.css';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: this.props.visibility
        }

    }
    render() {
        console.log(this.props)
        return (
            <div className={Style.question_wrapper}>

                <h3 className={Style.question_button_wrapper}>
                    <button className={Style.button} onClick={this.props.handleOnClick} value={this.props.id}>

                        <span className={Style.question_button_text}>{this.props.question.question}</span>

                        <div>
                            <span className={Style.span}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false' className={Style.svg}>
                                    <path d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' className={Style.path}></path>
                                </svg>
                            </span>
                        </div>

                    </button>
                </h3>

                {this.state.visible ? (
                    <div className={Style.question_answer}>{this.props.question.answer}</div>
                ) : null}

            </div>
        );
    }
}

export default Question;
