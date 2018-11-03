import React from 'react'
import ReactDOM from 'react-dom'

const Shoe = (props) => {
  return (
    <ul>
      <li>type: {props.shoeInfo.type}</li>
      <li>size: {props.shoeInfo.size}</li>
      <li>color: {props.shoeInfo.color}</li>
    </ul>
  )
}

const Shoes = (props) => {
  const shoeList = props.shoesInfo.map(
    shoe => 
    <li key={shoe.id}>
      <strong>type:</strong> {shoe.type}, 
      &nbsp;<strong>size:</strong> {shoe.size}, 
      &nbsp;<strong>color:</strong> {shoe.color} </li>
  )
  return (
    <ul>{shoeList}</ul>  
  )

}

const Storage = (props) => {
  const contentOfStorage = props.shoes.map(
    shoe => 
    <li key={shoe.id} >
      <strong>type:</strong> {shoe.type} 
      &nbsp;<strong>sizes:</strong> {shoe.sizes.join(' - ')} 
      &nbsp;<strong>colors:</strong> {shoe.colors.join(' - ')} </li>
  )
  return(
    <div>
      <h2>Shoes in Storage</h2>
      <ul>{contentOfStorage}</ul>
    </div>
  )
}
const OnlineStore = (props) => {
  const shoeList = props.shoes.map(
    shoe =>
    <li key={shoe.id}> 
      <strong>type:</strong> {shoe.type}
      <ul>{shoe.inStorage.map (shoeInfo => 
        <li key={shoeInfo.id}>{shoeInfo.gender} 
            &nbsp;<strong>sizes:</strong> {shoeInfo.sizes.join(' - ')}
            &nbsp;<strong>colors:</strong> {shoeInfo.colors.join(' - ')}
        </li>)} 
      
      </ul>
      
    </li>
  )
  return (
    <div>
      <h2>Available only from Online Store</h2>
      <ul>{shoeList}</ul>

    </div>
  )
}

const Store = (props) => {
  return (
    <div>
      <h2>Shoes in Store</h2>
      <Shoe shoeInfo={props.shoe} />
      <Shoes shoesInfo={props.shoes} />
    </div>
  )
}

const App = () => {
  const shoeObject = {
    type: 'sandal',
    size: 38,
    color: 'red'
  }
  
  const shoesOfStore = [
  {
    type: 'winter shoe',
    size: '24',
    color: 'blue',
    id:1
  },
  {
    type: 'slipper',
    size: '40',
    color: 'green',
    id:2
  },
  {
    type: 'slipper',
    size: '20',
    color: 'red',
    id:3
  },
  {
    type: 'slipper',
    size: '40',
    color: 'yellow',
    id:4
  }
  ]
  const shoeListOfStorage = [
    {
      type: 'winter shoe',
      sizes: [33,35,37,38,39,40],
      colors: ['green','red', 'white'],
      id: 101
    },
    {
      type: 'slipper',
      sizes: [20,21,24,30,32,34],
      colors: ['green','red', 'white'],
      id: 201
    },
    {
      type: 'sneaker',
      sizes: [20,21,24,30,32,34],
      colors: ['green','red', 'white'],
      id: 301
    },
    {
      type: 'rubber boots',
      sizes: [39,42,43],
      colors: ['black','red', 'white'],
      id: 401
    }
    ]
    const availableFromOnlineStore = [
      {
        type: 'rubber boots',
        id: 111,
        inStorage: [
          {
            gender: 'women',
            sizes: [37,38,39,42],
            colors: ['black','red', 'white', 'yellow'],
            id: 11
          },
          {
            gender: 'men',
            sizes: [39,40,41,42,43],
            colors: ['black','red', 'white', 'yellow'],
            id: 12
          },
          {
            gender: 'kids',
            sizes: [21,22,23,24,25,26,27,28],
            colors: ['black','red', 'white', 'yellow'],
            id: 13
          }
        ]
      },
      {
        type: 'sneaker',
        id: 222,
        inStorage: [
          {
            gender: 'women',
            sizes: [37,38,39,42],
            colors: ['black','red', 'white', 'yellow'],
            id: 21
          },
          {
            gender: 'men',
            sizes: [39,40,41,42,43],
            colors: ['black','red', 'white', 'yellow'],
            id: 22
          },
          {
            gender: 'kids',
            sizes: [21,22,23,24,25,26,27,28],
            colors: ['black','red', 'white', 'yellow'],
            id: 23
          }
        ]
      },
      {
        type: 'sandal',
        id: 300,
        inStorage: [
          {
            gender: 'women',
            sizes: [37,38,39,42],
            colors: ['black','red', 'white', 'yellow', 'silver'],
            id: 31
          },
          {
            gender: 'men',
            sizes: [39,40,41,42,43],
            colors: ['black','brown', 'white', 'grey'],
            id: 32
          },
          {
            gender: 'kids',
            sizes: [27,28,29,30,31,32,33],
            colors: ['black','red', 'white', 'pink', 'blue'],
            id: 33
          }
        ]
      },
      {
        type: 'spring shoe',
        id: 300,
        inStorage: [
          {
            gender: 'women',
            sizes: [37,38,39,42],
            colors: ['black','red', 'white', 'yellow', 'silver'],
            id: 31
          },
          {
            gender: 'men',
            sizes: [39,40,41,42,43],
            colors: ['black','brown', 'white', 'grey'],
            id: 32
          },
          {
            gender: 'kids',
            sizes: [27,28,29,30,31,32,33],
            colors: ['black','red', 'white', 'pink', 'blue'],
            id: 33
          }
        ]
      }

    ]

  return (
    <div>
      <h1>Shoe Shop</h1>
      <Store shoe={shoeObject} shoes={shoesOfStore}/>
      <Storage shoes={shoeListOfStorage}/>
      <OnlineStore shoes={availableFromOnlineStore}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))