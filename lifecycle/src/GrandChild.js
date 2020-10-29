import React from 'react'

class GrandChild extends React.Component {
    constructor(props){
        //super calling its parent's constructor function
        super(props)
        this.state = {

        }
        console.log("I'M IN GRANDCHILD CONSTRUCTOR")
    }

    componentDidMount(){
        console.log("I'm in GRANDCHILD componentDidMount")

    }

    render(){
        console.log('IM IN GRANDCHILD render')
        return(
            <h1>I'm a GrandChild</h1>
        )
    }
}

export default GrandChild