import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';
class Application extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }
    }
    handleClick = () => {
        this.setState({count: this.state.count+1});
    }

    UNSAFE_componentWillMount(props, state){

    }

    componentDidMount(props,state){
        console.log('Mounted With', props, state);
    }

    UNSAFE_componentWillReceiveProps(props){
        
    }

    UNSAFE_componentWillUpdate(props,state){
        // if(this.props.name !== props.name){
            
        // }
        console.log("Updated from", this.state ,"to", state);
    }

    componentDidUpdate(props,state){
        if(this.state.count>10 && this.state.count !== state.count && !this.state.overTen){
            console.log("Updating over ten");
            this.setState({overTen: true});
        }
    }

    resetCount=(e)=>{
        this.setState({
            count: 0,
            overTen:false
        });
            
    }

    render(){
        let {count}=this.state;
        let UNSAFE_name = 'Shubham';
        return(
            <div>
            <h1>Hello {UNSAFE_name}</h1>
            <h1>you click the button {count} times</h1>
            {/* {
                (this.state.overTen)?
                <h3>Beat high score of 10!</h3>
                :null
            } */}
            <HighScore 
                overTen = {this.state.overTen} 
                onReset= {(e)=>this.resetCount(e)}
                />
            <span>
                <button onClick={(e)=>this.handleClick()}>click</button>
            </span>
            </div>
        );
    }
}
export default Application;