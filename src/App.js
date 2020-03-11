import React from 'react';
import  DenseTable  from "./table/Table";
//import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm/MyForm';
import Board from './Board/Board';
//import  Table  from "./table/Table";


import axios from 'axios';

class App extends React.Component { 

  state = {
    ScoreList: []
  }

  componentDidMount() {
    axios.get(`http://localhost:63366/api/values`)
      .then(res => {
        const ScoreList = res.data;
        this.setState({ ScoreList });

       
      })
  }

  render() {

    const lst = this.state.ScoreList.map((res,i)=>{ 

      const { GameID, TeamID, Qtr, ScoreTime,ScorePoints } = res

      // return  <tr className="table-success"  key={i}>
      //         <td>{i+1}</td>
      //        <td>{GameID}</td>
      //        <td>{TeamID}</td>
      //        <td>{Qtr}</td>
      //       <td>{ScoreTime}</td>
      //       <td>{ScorePoints}</td>
      //       <td>abc</td>
      //       </tr>


return  {GameID :GameID, TeamID : TeamID ,Qtr:Qtr  , ScoreTime:ScoreTime,ScorePoints:ScorePoints}

    }
      );
    

  return (
    //<h1>this is for test</h1>
 <div>
<div className ="container">
  <br/>
  <br/>
  <br/>
   <div className="row">

   <div className="col-sm-6">

  <Board/>

   </div>
   
   <div className="col-sm-6">
   
   <MyForm/>
   </div>
   </div>
   <br/>
  <br/>
  <br/>
<div className="row">
<div className="col-sm-12">
{/* <Table lst={lst} /> */}
<DenseTable lst={lst} />
</div>

</div>

</div>
    </div>
  );

  }
}

export default App;
