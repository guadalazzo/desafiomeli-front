import "isomorphic-fetch";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";

class Items extends React.Component {
  state = { isLoading: true };
  static async getInitialProps({ req, res, query }) {
    const API = "http://localhost:3001";
    const product = query.id;
    const response = await fetch(`${API}/items/${product}`);
    const result = await response.json();
    this.setState = { isLoading: true };
    return result;
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  componentWillMount() {
    this.setState({ isLoading: true });
  }
  render() {
    const result = this.props.item;
    if (this.state.isLoading) {
      return (
        <Layout>
          <Breadcrumbs />
          <Loading />
        </Layout>
      );
    }

    return (
      <Layout>
        <Breadcrumbs />
        <article>
          <Product
            key={result.id}
            image={result.pictures}
            name={result.title}
            price={result.price.amount}
            currency={result.price.currency}
            priceDecimals={result.price.decimals}
            sold={result.sold_quantity}
            description={result.description}
          />
        </article>
      </Layout>
    );
  }
}

export default Items;
