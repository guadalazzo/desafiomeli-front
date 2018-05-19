import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ItemProd from "../components/ItemProd";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import "isomorphic-fetch";

require("isomorphic-fetch");

export default class Items extends React.Component {
  state = { isLoading: true, items: [], query: {} };
  componentDidMount() {
    this.setState(
      {
        query: this.props.url.query.search
      },
      this.handleRequest
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        query: nextProps.url.query.search,
        isLoading: true
      },
      this.handleRequest
    );
  }
  async handleRequest() {
    const API = "http://localhost:3001";
    const response = await fetch(`${API}/items?search=${this.state.query}`);
    const { items } = await response.json();
    this.setState({
      items,
      isLoading: false
    });
  }

  render() {
      let i=0;
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
        <div className="container">
          <div className="items">
            {this.state.items.map(
                    item => (
                      <ItemProd
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        price={item.price.amount}
                        currency={item.price.currency}
                        priceDecimals={item.price.decimals}
                        image={item.picture}
                        location={item.location}
                      />
                    )
                )}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            background: white;
            max-width: 80%;
            margin: 0 auto;
          }
          .items {
            width: 100%;
          }
        `}</style>
      </Layout>
    );
  }
}
