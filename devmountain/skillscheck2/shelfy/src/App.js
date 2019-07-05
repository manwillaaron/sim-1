import React, { Component } from "react";

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
// import Product from './components/Product/Product';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state={
      inventoryList:[]
      
    }
  }

  // editingProduct = (id) => {
  //   axios
  //   .get(`/api/products/${id}`)
  //   .then(res=> {
  //     this.setState({editingProductData:res.data})
  //     console.log(this.state.editingProductData);
  //   })
  // }

  componentDidMount()  {

    axios
    .get('/api/products')
    .then(res => {
      console.log(res.data)
      this.setState({ inventoryList: res.data });
      console.log(this.state.inventoryList)
    })
    
  }

  addProduct= (imageUrlInput,productNameInput,priceInput) =>{
    console.log(imageUrlInput,productNameInput,priceInput)
    axios
    .post('/api/product', {
      img_url: imageUrlInput,
      product_name:productNameInput,
      price: priceInput
    })
    .then(res => {
      this.setState({inventoryList: res.data})
      console.log(res.data);
    })
    .catch(err => console.log('err', err))
  
  }

  deleteProduct= id =>{
    // let {product} = this.state.inventoryList
    // const inventoryList = this.state.inventoryList
    console.log({id})
    // console.log({inventoryList});
    axios
    .delete(`/api/inventory/${id}`)
    .then(res => {
      this.setState({inventoryList: res.data})
    })
    .catch(err => console.log('not able to delete', err))
  }






  render(){
  return (
    <div className="App">
       <Header></Header>
       <Form
      addProduct={this.addProduct}
      
      
      
      ></Form>
      <Dashboard
      inventoryList= {this.state.inventoryList}
      deleteProduct = {this.deleteProduct}
      
      
      />
      
{/*      
      <Product></Product> */}
    </div>
  );
}
}

export default App;
