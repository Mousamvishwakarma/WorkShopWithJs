import React from 'react'
class About extends React.Component {

    constructor() {
        super()
        console.log("constructor")


        this.state = {
            name: "Ashish",
            count: 0
        }
    }

    componentDidMount() {
        console.log("Did mount")
    }

    componentDidUpdate() {
        console.log("Did update")
    }

    componentWillUnmount() {
        console.log("Will unmount")
    }

    render() {
        return (
            <div>
                {/* Displaying current count value from the component’s state */}
                <h1>Hello {this.state.count}</h1>

                {/* Button that increases the count when clicked.
                    setState() is used to update the state.
                    Updating the state triggers re-render and componentDidUpdate().
                */}
                <button
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                    Increment
                </button>
            </div>
        )
    }
}

export default About
