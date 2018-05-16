import Layout from '../components/Layout';
import Detail from '../components/Detail';
import Breadcrumbs from '../components/Breadcrumbs';
require("isomorphic-fetch");

export default class Items extends React.Component {
  static async getInitialProps({req,res,query}) {
    const API = 'http://localhost:3001'
    console.log(product)
    const { product } = query
    const response = await fetch(`${API}/items/${product}`)
    const result = await response.json()

    return result
  }
	render() {
		const result = this.props;
  	console.log(result)
  	return (
  		<Layout>
  		<Breadcrumbs></Breadcrumbs>
  		<Detail
  			/*key={result.id}
  			image={result.pictures.url}
  			name={result.title}
  			price={result.price}
  			sold={result.sold_quantity}
  			productstate={result.attributes.value_name}*/
  		></Detail>
  		</Layout>
  		)
  	}
  }