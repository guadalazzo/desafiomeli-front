			
export default ({name, price, location, image}) => (
 <a href="/item" className="product-item">
   <figure>
     <img src={image} alt="product view" />
     <div className="data">
       <span className="price">
         {price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
       </span>
       <h2>{name}</h2>
     </div>
   </figure>
	<span className="location">{location}</span>
			<style jsx>{`
				.product-item{
					display: flex;
					width: 100%;
					padding:16px;
					text-decoration: none;
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
		</a>
		);