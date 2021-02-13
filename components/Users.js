import {useState,useEffect} from 'react'

const Users = props =>{

const [state, setState] = useState([])
console.log(props.data)

useEffect(()=>{
// setState(props.data)
},[])



  return (

<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>


      {state.map((d,i)=>(

    <tr key={i} className={i%2==0?'table-active':''}>
      <th scope="row">{i+1}</th>
      <td>{d.product_title}</td>
      <td>{d.product_brand}</td>
      <td>{d.stock}</td>
      <td>₹{d.priceTag}</td>
    </tr>

      	))}

    </tbody>
    </table>

  	)

}

export default Users