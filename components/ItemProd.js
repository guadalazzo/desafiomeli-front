import Link from 'next/link'			
import Router from 'next/router'

export default class ItemProd extends React.Component {

handleClick = (event, id) => {
    Router.push(`/items?id=${id}`, `/items/${id}`, { shallow: true })
  }
  render(){
  	const {...item} =this.props
  	
  	const { id } = item
  	return(
	  	<div className="item">
			 <div onClick={event => this.handleClick(event,id)} className="product-item">
			 	<div className="link__inside"> 
			   <figure>
			     <img src={item.image} alt="product view" />
			     <div className="data">
			       <span className="price">
			         {item.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
			       </span>
			       <h2>{item.name}</h2>
			     </div>
			   </figure>
				<span className="location">{item.location}</span>
				</div>
				</div>
				<style jsx>{`
					.product-item{
						display: flex;
						width: 100%;
						text-decoration: none;
					}
					.link__inside{
						display: flex;
						padding:16px;
					}
					.product-item:hover{
						opacity: 0.7;
					}
					.location{
						color: #666666;
						margin: 32px;
					}
					.data{
						margin: 16px;
					}
					.price{
						margin-bottom: 32px;
						font-size: 22px;
						color: #333333;
					}
					h2{
						font-size: 18px;
						color: #333333;
						font-weight: 400;
					}
					figure{
						display: flex;
						width: 70%;
						margin:0;
					}
					figure img{
						border-radius: 4px;
					}
				`}</style>
			</div>
  		)
  }
}
