
export default class Header extends React.Component{	
	render(){
		return <div>
			
			<header>
				<nav>
					<img src="/static/logo.png" alt="mercadolibre" />
					{ this.props.children }
				</nav>
			</header>
			<style jsx>{`
				header {
					background: #fff159;
					color: white;
					font-weight: bold;
					font-size: 1.1em;
					padding: 15px;
					border-bottom: 1px solid #cecece;
				}
				img{
					object-fit: contain;
				}
				nav{
					width: 80%;
					margin: auto;
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</div>
	}
}