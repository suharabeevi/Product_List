import React ,{useState} from 'react'
import {productData } from "./Products.data"
import { Card,Button } from 'react-bootstrap'

const Products = () => {
  const [items,setItems] = useState(productData )
  return (
    <div>
    <h1 className='bg-info text-white display text-center'>Products</h1>
    {items.map((item)=>(
      <div className='d-inline-flex p-2'>
      <Card  className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
      <Card.Img className='p-2'variant="top" src={require('./Assets/samsung.png (2).webp')} />
      <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <h5>Price:{item.price}</h5>
        <div>
          <p>
            Qty:<Button className='m-1'>+</Button>{item.QTY}<Button className='m-1'>-</Button>
          </p>
        </div>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
    ))}
    

    </div>
  )
}

export default Products
