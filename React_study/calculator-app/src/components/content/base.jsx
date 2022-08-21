import React, { Component } from 'react';
import base from "../../style/base.module.css"

class Base extends Component {
    state = {}
    render() {
        console.log(this.props.children);
        return (
            <div className={`card ${base.my_card}`}>
                <div className="card-body">
                    <h4>{this.props.children}</h4>
                </div>
            </div>
        );
    }
}

export default Base;