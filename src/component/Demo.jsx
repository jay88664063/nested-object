import { Component } from "react";

function Show() {
    return <h1>HELLOW JENNY</h1>
}

function Info() {
    return (
        <div>
            <h1>er.JAY</h1>
            <Show />
        </div>
    )
}

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>NANDARBARWALA</h1>
                < Info />
            </div>
        )
    }
}

export default Demo