import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="table-dark">
              <TableCell>Game</TableCell>
              <TableCell align="right">TEAM</TableCell>
              <TableCell align="right">QTR</TableCell>
              <TableCell align="right">Score Time</TableCell>
              <TableCell align="right">Score Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.lst.slice(0,10).map((row , i)=> (
              <TableRow key={i} className="btn btn-warning">
                <TableCell component="th" scope="row">
                  {row.GameID}
                </TableCell>
                <TableCell align="right">{row.TeamID}</TableCell>
                <TableCell align="right">{row.Qtr}</TableCell>
                <TableCell align="right">{row.ScoreTime}</TableCell>
                <TableCell align="right">{row.ScorePoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}




// import React from 'react';
// import MaterialTable from 'material-table';
// import PropTypes from 'prop-types';

// export default function MaterialTableDemo(props) {

//   var Mydata =[];

//    var  Mydata = JSON.stringify(props.lst); 

//    console.log(Mydata);

//    let tabledata = props.lst.map(res=>{

//     let localdata = { GameID : res.GameID , TeamID : res.TeamID }
     
//     return JSON.stringify(localdata);
  
  
//   });

//   tabledata = { tabledata : PropTypes.array.isRequired};

//    console.log( "josn data is " + tabledata);

//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'GameID', field: 'GameID' },
//       { title: 'TeamID', field: 'TeamID' },
//     ],
//    // data: props.lst,

//    data : [Mydata],
   
//   //  props.lst.map(res=>{

//   //       let tabledata = { GameID :  JSON.stringify(res.GameID) , TeamID :  JSON.stringify(res.TeamID) }
//   //      //console.log("table123 "+  JSON.stringify(res.GameID));
//   //      console.log("table123 "+  tabledata);
//   //      return tabledata;
      

//   //  })
//   });

//   return (
//     <MaterialTable
//       title="Material UI Table Example"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }












// import React from 'react';
// //import './Table.css'

// // className Table extends React.Component {

// //     render() {
// //         return <h2>Hi, I am Table</h2>;
// //       }


// // }

// function Table (props) {

//   return <table className="table table-hover">
//   <thead>
//     <tr className="table-dark">
//       <th scope="col">S.NO.</th>
//       <th scope="col">Game Id</th>
//       <th scope="col">Team</th>
//       <th scope="col">Qtr</th>
//       <th scope="col">Score</th>
//       <th scope="col">Time</th>
//       <th scope="col">Description</th>
//     </tr>
//   </thead>
//   <tbody>
 
//      {props.lst}
    
//  </tbody>
// </table>;
  

// }

// export default Table;