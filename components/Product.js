import {Link} from '../routes'		
import Router from 'next/router'

export default class Product extends React.Component {

  render(){
  	const prod =this.props
  	return(
	  	<article>
							<figure>
								<img src={prod.image} alt="product view"/>
								<div className="data-view">
									<p><span>Nuevo</span> <span>-</span> <span>{prod.sold} vendidos</span></p>
									<h2 className="product-name">{prod.name}</h2>
									<span className="price">${prod.price}</span>
									<button>Comprar</button>
								</div>
							</figure>
								<section>
									<h3>Descripcion del producto</h3>
									<p>{prod.description}</p>
								</section>
						<style jsx>{` 
							article{
								padding: 32px;
								text-decoration: none;
								color: #333333;
								background: white;
								max-width: 80%;
								margin: 0 auto;
							}
							p{
								margin-bottom: 16px;
								font-size: 14px;
							}
							section p{
								color: #999999;
								font-size: 16px;
								max-width: 70%;
							}
							.data-view{
								width: 25%;
								display: flex;
								flex-direction: column;
							}
							h2{
								margin-top: 0;
								font-size: 24px;
							}
							h3{
								font-size: 28px;
								margin-bottom: 16px;
								margin-top: 14px;
							}
							.price{
								margin: 16px 0;
								font-size: 46px;
							}
							button{
								margin-top: 16px;
								background: #3483FA;
								box-shadow: none;
								padding: 8px 10px;
								color: white;
								border: 1px solid #3483FA;
							}
							figure{
								display: flex;
								justify-content: space-between;
								margin: 0; 
							}
						`}</style>
					</article>
  		)
  }
}
