import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
import FeaturedProduct from './FeaturedProduct';












import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Search() {


    
  const [itemCount, setItemCount] = React.useState(1);
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3000/cards`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (

        <div style={{ padding: 20 }}>
           
           <div className='col-md-12 col-lg-12 col-sm-12'>
            <span className='d-flex'>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
             <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                </Badge>
                </span>
                </div>


                <br/>
            <Card.Group itemsPerRow={5} >

                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        
                        return (
                         
                                 <Card className='mx-2 card_for_add'>
                                        <Card.Content>
                                            <Card.Header>{item.name}</Card.Header>
                                            <img src={item.imageSrc} alt='' className='img-fluid bg-warning'/>
                                            {/* <button className='btn btn-outline-success text-center mx-2'>+</button>  */}
                                            {/* <button className='btn btn-outline-success  text-center mx-2'>-</button> */}
                                          


                                           

                                            <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
                                        </Card.Content>
                                  </Card>
                                  






                              
                         
        

                                    )
                    })
                                    ) : (
                    APIData.map((item) => {
                        return (
                           
                            // <div className="col-md-2 my-3 " >
                         
                                    <Card className='mx-2'>
                                        <Card.Content>
                                            <Card.Header>{item.name}</Card.Header>
                                            <img src={item.imageSrc} className='img-fluid' alt=''/>
                                            {/* <button className='btn btn-outline-success  text-center mx-2'>+</button>
                                            <button className='btn btn-outline-success  text-center mx-2'>-</button> */}
 

<ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
                                        </Card.Content>
                                    </Card>
                                       
                                     




                    //    </div>
                            
    
                                    )
                    }
                                    )
                
                )}

                                </Card.Group>

                                </div>
                            
                        )
                    }