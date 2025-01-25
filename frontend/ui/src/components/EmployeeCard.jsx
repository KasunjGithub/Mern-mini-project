import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EmployeeCard=({employee})=> {
  return (
    
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/free-psd/3d-render-businessman-with-arms-crossed-wearing-brown-suit-gold-tie-he-looks-confident-professional_632498-32063.jpg?t=st=1737778195~exp=1737781795~hmac=3e8d02f9bf54535349b9c4595780ff632cc71a17796e58f480a9b6f8825dede3&w=740"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          EmployeeID : {employee.employeeID} <br/>
          Employee address : {employee.address}<br/>
          Employee NIC : {employee.nic}<br/>


        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
  );
}

export default EmployeeCard;
