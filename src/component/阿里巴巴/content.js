import React,{Component} from 'react'
import {Mocknetwork} from '../../until'
import './content.css'
class Content extends Component{
   state={
       list:[]
   }
    render(){
        return <div className="content">
                {
                    this.state.list.map((item,index)=>{
                        return <div className="content_item" key={index}>
                            <img src={require('../../static'+item.picurl)} alt=""/>
                            {/**<img src={require('../../static'+item.picurl)}/> */}
                            <p>{item.title}</p>
                        </div>
                    })
                }
        </div>
    }
    componentDidMount(){
        Mocknetwork('/alibb/list/',{}).then(data=>{
           this.setState({list:data})
        })
    }
}

export default Content