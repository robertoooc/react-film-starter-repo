import React, {Component} from 'react'
import {useState} from 'react'
// export default class Fave extends Component{
//     state={
//         isFave: false
//     }
//     handleClick = e =>{
//         e.stopPropagation()
//         console.log('clicked')
//         this.setState((prevState)=>{
//             return {isFave: !prevState.isFave}
//         })
//     }
//     render(){
//         const action = this.state.isFave ?'remove_from_queue':'add_to_queue'
//         return(
// <div 
//     className={`film-row-fave ${action}`}
//     onClick={this.handleClick}
// >
//   <p className="material-icons">add_to_queue</p>
// </div>
//         )
//     }
// }

export default function Fave(props){
   
    
    function handleClick(e){
        e.stopPropagation()
        console.log('clicked')
        //setIsFave(!isFave)
        props.onFaveToggle()
    }
    const action = props.isFave ?'remove_from_queue':'add_to_queue'
    return(
        <div 
    className={`film-row-fave ${action}`}
    onClick={handleClick}
>
  <p className="material-icons">add_to_queue</p>
</div>
    )
}