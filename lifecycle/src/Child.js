import React from 'react'
import GrandChild from './GrandChild'


class Child extends React.Component {
    constructor(props){
        //super calling its parent's constructor function
        super(props)
        this.state = {

        }
        console.log("I'M IN CHILD CONSTRUCTOR")
    }

    componentDidMount(){
        console.log("I'm in CHILD componentDidMount")

    }

    render(){
        console.log('IM IN CHILD render')
        return(
            <GrandChild/>
        )
    }
}

export default Child 