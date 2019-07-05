import React, { Component } from "react";


export default class Dashboard extends Component {
    

 

    render(){
        // console.log(this.props.inventoryList.props.product.id);
        // console.log(this.props.product.id);
       
       
        return(
            <div>

{this.props.inventoryList.map((product, i) => (
            
            <div key={i}
            className="product-container">
              <img src={product.img_url} alt="" />
              <div className="product-box">
                <p>{product.product_name}</p>
                <p>{product.price}</p>
              </div>
              <div className='product-btns' >
                 
                    <button  onClick = {(id) => this.props.deleteProduct(product.id)}>Delete</button>
                    <button onClick = {id => this.props.editingProduct(id)}>edit</button>
                </div> 
            </div>
               ))}
                
                </div>

        
            
           
        )
        }
}