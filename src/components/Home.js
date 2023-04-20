
import { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      x:0
    }
    console.log("constructeur")
  }
  componentDidMount(){
    console.log("componentDidMount")
  
  }
  componentDidUpdate(precprops,pravestate,snapshot){
    console.log("componentDidUpdate")
    console.log(pravestate)

  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.x==nextState.x){
      return false
    }
    else{
      console.log("faire")
      console.log("shouldComponentUpdate")

      return true
    }
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
render(){
    return (
    <div>
        Home page
        <p>{this.state.x}</p>
        <button onClick={()=>{this.setState({x:this.state.x+1})}}>incrementer</button>
        <button onClick={()=>{this.setState({x:this.state.x-1})}}>décrementer</button>
        <button onClick={()=>{this.setState({x:0})}}>Reset</button>


    </div>
  );
}
}

export default Home;