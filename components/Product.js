	export default ()=>	<article>
				<figure>
					<img src="http://via.placeholder.com/680x700" alt="product view"/>
					<div className="data-view">
						<p><span>Nuevo</span> <span>-</span> <span>234 vendidos</span></p>
						<h2 className="product-name">Ipod apple touch</h2>
						<span className="price">$1980</span>
						<button>Comprar</button>
					</div>
				</figure>
					<section>
						<h3>Descripcion del producto</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section>
			<style jsx>{` 
				article{
					padding: 32px;
					text-decoration: none;
					color: #333333;
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