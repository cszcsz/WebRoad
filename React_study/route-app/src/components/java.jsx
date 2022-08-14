import React, { Component } from "react";

class Java extends Component {
    state = {
        data: [
            { id: 1, title: "基本数据类型" },
            { id: 2, title: "集合类" },
            { id: 3, title: "面向对象" },
            { id: 4, title: "异常体系" },
            { id: 5, title: "IO流" },
            { id: 6, title: "注解与反射" },
        ],
    };
    render() {
        return (
            <React.Fragment>
                <h1>Java</h1>
                <hr />
                <div>
                    {this.state.data.map(item =>
                        (<div key={item.key} >{item.id + '. ' + item.title}</div>)
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Java;
