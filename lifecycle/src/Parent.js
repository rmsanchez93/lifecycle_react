import Child from './Child'
import React from 'react'



class Parent extends React.Component {
    //constructor is kinda like initialize in ruby
    constructor(props){
        //super calling its parent's constructor function
        super(props)
        this.state = {

        }
        console.log("I'M IN PARENT CONSTRUCTOR")
    }

    componentDidMount(){
        console.log("I'm in PARENT componentDidMount")
        this.setState({
            loaded: true
        })

    }

    render(){
        console.log('IM IN PARENT render')
        return(
            <Child/>
        )
    }
}

export default Parent