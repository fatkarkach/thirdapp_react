import axios from "axios";
import { Component } from "react";

class Alltuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuto: [],
      products: {
        title: undefined,
        description: undefined,
        published: undefined
      },
      newproducts: {
        "title": "title1",
        "description": "rtghjk",
        "published": "ghjklm"
      },
      x: 15
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/tutorials')
      .then((response) => this.setState({ tuto: response.data }))
    // axios.post('http://localhost:8080/api/tutorials',this.state.newproducts).then(response=>console.log(response.data))
    // axios.delete('http://localhost:8080/api/tutorials/'+this.state.x).then((response)=>console.log(response.data))
    // axios.put('http://localhost:8080/api/tutorials/16',this.state.newproducts).then((response)=>console.log(response.data))

  }

  handletitle = (e) => {
    this.setState({
      products: {
        ...this.state.products,
        title: e.target.value
      }
    })

  }

  handledescription = (e) => {
    this.setState({
      products: {
        ...this.state.products,
        description: e.target.value
      }
    })

  }

  handlepublish = (e) => {
    this.setState({
      products: {
        ...this.state.products,
        published: e.target.value
      }
    })

  }

  // handlesubmit = async(e) => {
  //   e.preventDefault()
  //  await axios.post('http://localhost:8080/api/tutorials', this.state.products).then(response => console.log(response.data))
  //   axios.get('http://localhost:8080/api/tutorials')
  //   .then((response) => this.setState({ tuto: response.data }))
  // }

  handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/api/tutorials', this.state.products).then(response =>axios.get('http://localhost:8080/api/tutorials')
    )
    .then((response) => this.setState({ tuto: response.data }))
  }

  render() {
    return (
      <div>
        <h1>tutoriels</h1>
        {this.state.tuto.map((item, key) => // utilisez this.state.tuto
          <ul key={key}>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.published}</li>
          </ul>
        )}
        <br />
        Title:<input type="text" onChange={this.handletitle} />
        Description:<input type="text" onChange={this.handledescription} />
        published:<input type="text" onChange={this.handlepublish} />
        <button onClick={this.handlesubmit}>add title</button>
      </div>
    )
  }
}

export default Alltuto;
