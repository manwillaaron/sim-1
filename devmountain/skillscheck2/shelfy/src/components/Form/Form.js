import React, { Component } from "react";
import './Form.css'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageUrlInput: "",
      productNameInput: "",
      priceInput: ""
    };
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.editingProductData !== prevProps.editingProductId) {
      
  //   }

  // //  let  {imageUrlInput,productNameInput,priceInput} = this.state
  // //   let  {img_url,product_name,price}= this.props.editingProductData
  // //   let newData = {imageUrlInput,productNameInput,priceInput}
  // //    let prevData = {img_url,product_name,price}
  // //   if(prevData !== newData && newData ){
  // //     this.setState({editing: newData})
  // //   }else{
  // //     return null
  // //   }
  // 

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.priceInput);
  };

 
  render() {
    let {imageUrlInput,productNameInput,priceInput} = this.state
  return (
    <div className="input-btn-container">
      <div className="inputs">
        <input
          onChange={this.handleChange}
          value={this.state.imageUrlInput}
         
          name="imageUrlInput"
          placeholder="Image URL"
        />
        <input
          onChange={this.handleChange}

          value={this.state.productNameInput}
          name="productNameInput"
          placeholder="Product Name"
        />
        <input
          onChange={this.handleChange}
          value={this.state.priceInput}
          name="priceInput"
          placeholder="Price"
        />
      </div>
      <div className="buttons">
        <button>Cancel</button>
      
           <button onClick={this.props.addProduct(imageUrlInput,productNameInput,priceInput)}>Add</button>
        
         
          
      </div>
    </div>
  );
}
}