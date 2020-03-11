import React from 'react';
import './MyForm.css';


import axios from 'axios';

class  MyForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = { qtrvalue: '1', 
                      pointvalue : '1',
                      ScorePoints : '',
                      ScoreTime : '',
                      GameId : '',
                      TeamID : '14',
                      Description : 'abcd',
                      Qtr:''

                    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePoint = this.handleChangePoint.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);


        //this.handleSubmit = this.handleSubmit.bind(this);
      }

    mySubmitHandler = (event) => {
        event.preventDefault();
       // console.log("You are submitting " + event);
        //alert(event.target.txtGameId.value);
       // alert(this.state.qtrvalue);
        //alert(this.state.pointvalue);
         
        // if(event.target.chkbox.checked){

           
        //     //alert("this is away team");
        //     this.setState({TeamID: '12'});

        // }

        const Scorepost = {
            GameId: event.target.txtGameId.value,
            TeamID : this.state.TeamID,
            Qtr : this.state.qtrvalue,
            ScorePoints : this.state.pointvalue,
            Description : this.state.Description,
            ScoreTime : new  Date().toLocaleString()

          };

          const header = {
            'Content-Type': 'application/json;charset=UTF-8'
          }

          console.log("You are score post " +  JSON.stringify(Scorepost));

          axios.post(`http://localhost:63366/api/values`,  JSON.stringify(Scorepost)  , {headers: header})
          .then(res => {
            console.log(res);
            alert(res.data);

           
          });

      }

      handleChange(event) {
       this.setState({qtrvalue: event.target.value});
      }

      handleOptionChange(event) {
        this.setState({
            TeamID: '12'
        });
      }

      handleChangePoint(event) {
       // console.log("You are changing " + event.target.value);
        this.setState({pointvalue: event.target.value});
       }


render(){

  return (
    //<h1>this is for test</h1>
 <div>
  <form className="form" onSubmit={this.mySubmitHandler}>

<div>
<b>HOME </b>&nbsp;&nbsp;
  <label className="switch">
  <input type="checkbox" name="chkbox" onChange={this.handleOptionChange}/>
  <span className="slider round"></span>
</label> &nbsp;&nbsp;<b>GUEST </b>
<br/>
</div>
 
    <label htmlFor="exampleInputEmail1">Game Id</label>
    <input type="text" className="form-control"  value="101" name="txtGameId" disabled/>
   
 
  
  
    <label >Quarter</label>
    

    <select  className="form-control" id="ddlPoint"  name="ddlPoint" value={this.state.qtrvalue} onChange={this.handleChange} required>
        <option  value="1">1</option>
        <option  value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
    </select>
 
    <label >Score Points</label>
    

    <select  className="form-control" id="ddlPoint"  name="ddlPoint"   value={this.state.pointvalue} onChange={this.handleChangePoint} required>
        <option  value="1">1</option>
        <option  value="2">2</option>
        <option  value="3">3</option>
    </select>
 <br/>
  <button type="submit" className="btn btn-primary btn-block">Submit</button>
</form>
    </div>
  );
}
}

export default MyForm;