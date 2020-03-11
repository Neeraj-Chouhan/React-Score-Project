import React from 'react';
import './Board.css';

import axios from 'axios';

//function Board() {
class Board extends React.Component { 

    state = {
        ScoreList: [],
        homeScore : 0,
        guestScore :0

      }
    
      componentDidMount() {
        axios.get(`http://localhost:63366/api/values/sumPoints`)
          .then(res => {
            const ScoreList = res.data;
            this.setState({ ScoreList });
    
            console.log("score total is "+ JSON.stringify(ScoreList));
          })
      }

    render() {

        let homeScore = 0;
        let guestScore = 0;

        const lst = this.state.ScoreList.map((res,i)=>{
            
            if(res.TeamID ==12){

               
                guestScore = res.ScorePoints;
            }else{

                homeScore = res.ScorePoints;
            }

            //const { GameID, TeamID, Qtr, ScoreTime,ScorePoints } = res
      
      
      //return  {GameID :GameID, TeamID : TeamID ,Qtr:Qtr  , ScoreTime:ScoreTime,ScorePoints:ScorePoints}

        }

  

        );

        //this.state({homeScore});
        //this.state({guestScore});
  return (
   
 <div >

<table  className="mytable">
     <thead>
     <tr >
      <th>Home</th>
      <th>QTR</th>
   <th>GUEST</th>
   </tr>  
   </thead>
   <tbody >
<tr>
<td>
   {homeScore}
  </td>
      <td>1</td>
   <td>
    {guestScore}
    </td>
   </tr>
   </tbody> 
</table>
 
    </div>
  );

    }

}

export default Board;