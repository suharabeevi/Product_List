import React ,{useState} from 'react'
import {productData } from "./Products.data"
import { Card,Button } from 'react-bootstrap'

const Products = () => {
  const [items,setItems] = useState(productData )
  const qtyadd=(id)=>{
const newItem =items.map((item)=>(
  item.id === id ?{...item,QTY:item.QTY+1}: item
))
setItems(newItem)
  }
  

  const qtyred=(id)=>{
    const newItem =items.map((item)=>(
      item.id === id  && item.QTY>1 ?  {...item,QTY:item.QTY-1}: item
    ))
    setItems(newItem)
      }

  return (
    <div>
    <h1 className='bg-info text-white display text-center'>Products</h1>
    {items.map((item)=>(
      <div className='d-inline-flex p-2' key={item.id}>
      <Card  className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
      <Card.Img className='p-2'variant="top" src="https://picsum.photos/id/1/200/300" />
      <Card.Body>
        <Card.Title className='text-info'>{item.model}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <h5>Price:{item.price}</h5>
        <div>
          <p>
            Qty:<Button className='m-1' onClick={()=>qtyadd(item.id)}>+</Button>{item.QTY}<Button className='m-1' onClick={()=>qtyred(item.id)}>-</Button>
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
