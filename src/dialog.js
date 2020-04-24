import React from 'react';
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { MdShoppingCart } from 'react-icons/md';
import { GiMilkCarton } from 'react-icons/gi'
import { FaMobileAlt } from 'react-icons/fa'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Card from './card'
import Create from './create'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAge("");
  };

  function addExpense(props) {
    let count=1;
        if(localStorage.getItem("count"))
            count = localStorage.getItem("count");
        else
            {
                localStorage.setItem("count",1);
                localStorage.setItem("expenses",{});
            }
        document.getElementById("cards").innerHTML+="<div id='carde"+count+"'></div>"
        ReactDOM.render(
            <Card name={props.name} amount={props.amount} type={props.type} />,
            document.getElementById('carde'+count)
          );
    let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    let element={};
    element.name=props.name;
    element.amount=props.amount;
    element.type=props.type;
    expenses.push((element));
    console.log(expenses);
    localStorage.setItem("expenses",JSON.stringify(expenses));
    localStorage.setItem("count",parseInt(count)+1);
    console.log(props);
  }

//   function showExpenses()
//   {
//     let expenses=JSON.parse(localStorage.getItem("expenses") || "[]");
//     for(let i=0;i<expenses.length;i++)
//     {
//         console.log(expenses[i]);
//     }
//   }
function showExpenses(){
    let count=1;
    if(localStorage.getItem("count"))
        count = localStorage.getItem("count");
    else
        {
            localStorage.setItem("count",1);
            localStorage.setItem("expenses",{});
        }
    let expenses=JSON.parse(localStorage.getItem("expenses") || "[]");
    
    for(let i=0;i<expenses.length;i++)
    {
        document.getElementById("cards").innerHTML+="<div id='carde"+count+"'></div>"
        ReactDOM.render(
        <Card name={expenses[i].name} amount={expenses[i].amount} type={expenses[i].type} />,
        document.getElementById('carde'+count)
      );
        console.log(expenses[i]);
    }
  };
// debugger;
  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
        {/* {()=>{let expenses=JSON.parse(localStorage.getItem("expenses") || "[]");
    for(let i=0;i<expenses.length;i++)
    {
        console.log(expenses[i]);
    }}} */}
    {/* <Create /> */}
        <div id="cards"></div>
        <Create/>
        <div id="create" onClick={handleClickOpen}>
                <Fab color="primary" aria-label="add">
                <AddIcon />
                </Fab>
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add Expense Name, Expense Amount and Expense Type.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Expense Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="amount"
            label="Expense Amount"
            type="text"
            fullWidth
          />
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">Expense Type</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}><MdShoppingCart /> Clothing</MenuItem>
            <MenuItem value={20}><GiMilkCarton /> Eateries</MenuItem>
            <MenuItem value={30}><FaMobileAlt /> Electronics</MenuItem>
            </Select>
      </FormControl>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => addExpense({name:document.getElementById("name").value,amount:document.getElementById("amount").value,type:document.getElementById("demo-simple-select-autowidth").innerText})} color="primary">
            Add Expense
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

