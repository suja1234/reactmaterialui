import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon  from '@material-ui/icons/Favorite';

import './App.css';

function App() {
  return (
    <>
      <h1>Text Button</h1>
      <Button variant="contained">click me</Button>
      <Button variant="contained" color="secondary">secondary</Button>
      <Button variant="contained"color="primary">primary</Button>
      <Button variant="contained" disabled>disabled</Button>
     
      <h3>Outlined Button</h3>
      <Button variant="outlined">click me</Button>
      <Button variant="outlined" color="secondary">secondary</Button>
      <Button variant="outlined"color="primary">primary</Button>
      <Button variant="outlined" disabled>disabled</Button>

      <h3>Button size</h3>
      <Button variant="outlined">click me</Button>
      <Button variant="outlined" color="secondary" size="small">small</Button>
      <Button variant="outlined"color="primary" size="medium">medium</Button>
      <Button variant="outlined"  colr="inheritt" size="large">large</Button>

      <h1>Button with icon</h1>
      <Button variant="contained">click me</Button>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>Delete</Button>
      <Button variant="contained"color="primary" endIcon={<DeleteIcon/>}>Delete</Button>
      <Button variant="contained" disabled>disabled</Button>
      
      <h1> Custom Button</h1>
      <Button variant="contained" color="secondary" style={{backgroundColor:"yellowgreen"}}>Custom button</Button> 

      <h4>ButtonGroup</h4>
      <ButtonGroup variant="outlined" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      
      <h1>floating action button</h1>
      <Fab color="primary"><AddIcon /></Fab>
                         
<Fab color="secondary">
  <EditIcon />
</Fab>
<Fab variant="extended">
  <NavigationIcon />
  Navigate
</Fab>
<Fab disabled >
  <FavoriteIcon />
</Fab>

      
    
      
    </>
  );
}

export default App;
