
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function BasicExample(props) {
  const [showMore,setShowMore]=useState(false);
  function handleExplore(){
    setShowMore(!showMore);
  }
 
  return (
    <Card style={{ display:'flex',
    flexDirection:'row',
    marginLeft:'20px',
    marginRight:'20px',
    marginTop:'10px',
    marginBottom:'10px',
    borderColor:'green',
    cursor:'pointer',
    overflow:'auto'
    }}>
      <Card.Img variant="top" src={props.image} style={{height:'200px',width:'200px', cursor:'pointer', marginTop:'10px',marginLeft:"10px" }} />
      <Card.Body>
        <Card.Title>Title:{props.title}</Card.Title>
        <Card.Title>Author:{props.author}</Card.Title>
        <Card.Text>
        <h5>Description:</h5>{props.smallview}
        </Card.Text>
        <Button variant="primary" onClick={handleExplore}>
        {showMore?"Hide":"Show"}Details
        </Button>
       {showMore && <p>{props.content}</p>}
       <h5>Ratings:{props.ratings}</h5>
      </Card.Body>
    </Card>
   
  );
}

