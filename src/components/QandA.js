import React, { Component } from 'react'
import axios from 'axios'

const q1API = "http://anapioficeandfire.com/api/characters/16";
const q2API = "http://www.anapioficeandfire.com/api/houses/378";
const q3API = "http://www.anapioficeandfire.com/api/houses/229";
const q4API = "http://www.anapioficeandfire.com/api/houses/17";
const q5API = "http://www.anapioficeandfire.com/api/characters/901";
const q6API = "http://www.anapioficeandfire.com/api/houses/362";
const q7API = "http://www.anapioficeandfire.com/api/characters/232";

const getQ1API = axios.get(q1API);
const getQ2API = axios.get(q2API);
const getQ3API = axios.get(q3API);
const getQ4API = axios.get(q4API);
const getQ5API = axios.get(q5API);
const getQ6API = axios.get(q6API);
const getQ7API = axios.get(q7API);

export class QandA extends Component {
    constructor(props){
        super(props);
        this.state ={
            q1 : [],
            q2 : [],
            q3 : [],
            q4 : [],
            q5 : [],
            q6 : [],
            q7 : []

        }
    }

   componentDidMount(){
    axios.all([getQ1API , getQ2API , getQ3API , getQ4API , getQ5API , getQ6API , getQ7API]).then(
        axios.spread((...res) => {
            this.setState({q1:res[0].data.born}) 
            this.setState({q2:res[1].data.region}) 
            this.setState({q3:res[2].data.coatOfArms}) 
            this.setState({q4:res[3].data.seats[1]}) 
            this.setState({q5:res[4].data.aliases[1]}) 
            this.setState({q6:res[5].data.founded}) 
            this.setState({q7:res[6].data.culture}) 
            

            // console.log("Q1 here" ,this.state.q1);
        }
        )
    ).catch(err => console.error(err.message)
    )}

    render() {
        return (
            <div>
                <h2>Where was Margaery Tyrell born?</h2>
                {/* {console.log(this.state.q1)} */}
                <h3>{this.state.q1}</h3>
                <br/>
                <h2>What region is House Targaryen in?</h2>
                <h3> {this.state.q2} </h3>
                <br/>
                <h2>What's the coat of arms of House Lannister?</h2>
                <h3>{this.state.q3}</h3>
                <br/>
                <h2>What is the second seat of House Baratheon?</h2>
                <h3>{this.state.q4}</h3>
                <br/>
                <h2>What is Robert Baratheon's second alias?</h2>
                <h3>{this.state.q5}</h3>
                <br/>
                <h2>What's the name of the founder of House Stark?</h2>
                <h3>{this.state.q6}</h3>
                <br/>
                <h2>What are the titles of Catelyn Stark's three POV books?</h2>
                <h3>{this.state.q7}</h3>
                <br/>
            </div>
        )
    }
}
 
export default QandA