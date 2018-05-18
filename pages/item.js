import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";

require("isomorphic-fetch");

export default class Items extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const API = "http://localhost:3001";
    const product = query.id;
    const response = await fetch(`${API}/items/${product}`);
    const result = await response.json();

    return result;
  }
  render() {
    const result = this.props.item;
    console.clear();
    console.log(result);
    return (
      <Layout>
        <Breadcrumbs />
        <article>
          <Product
            key={result.id}
            image={result.pictures}
            name={result.title}
            price={result.price.amount}
            sold={result.sold_quantity}
            description={result.description}
            //productstate={result.attributes.value_name}
          />
        </article>
      </Layout>
    );
  }
}
