import React,{Component} from 'react';
import One from '../childer/One';
import axios from 'axios';
import Displaycounter from '../Displaycounter/';
import {getPosts,getData} from '../../Store/Api';

export default class Contact extends Component{
   constructor(){
       super();
       this.state={
        friends : [
            {id:1, name: 'Dave',age:50},
            {id:2,name: 'Kellie',age:42},
            {id:3,name: 'Max',age:12},
            {id:2,name: 'Jack',age:12}
        ],persons:[],
        d:[]
       }
   }
   feachData=async ()=>{
    const d = await getData('https://jsonplaceholder.typicode.com/posts');

    this.setState({ d  });
    console.table(d);

}
    componentDidMount(){
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        // .then(res => {
        //   var persons =[];
        //   persons =res.data;
        //   this.setState({ persons  });
        // })

        

                //   var persons = [];
        //   console.log(getData('https://jsonplaceholder.typicode.com/users'));
        //   this.setState({ persons  });
    }
    display =()=>{
        // console.table(this.state.persons);
        // console.table(this.state.friends);
        console.table(this.state.d);
    }
    render(){
         return(
        <div>

            <h1 onClick={this.feachData}>click</h1>
            <h1 onClick={this.display}>Contact Contact</h1>
            <ul>
                {this.state.friends.map(p => (<li key={p.id}>{p.name}</li>))}
            </ul>
            {/* <h1>{this.state.persons[0].id} </h1> */}
            <ul>
                {this.state.d.map(p => (<li key={p.id}>{p.body}</li>))}
            </ul>

            {/* <ul>
                {this.state.persons.map(person=>(<li key={person.id} > {person.id} {person.name}</li>))}                
            </ul> */}
            <Displaycounter />
        </div>
        );
    }
}
