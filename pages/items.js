import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ItemProd from "../components/ItemProd";
import Breadcrumbs from "../components/Breadcrumbs";
import "isomorphic-fetch";

class Items extends React.Component {
  state = { isLoading: true, items: [], query: {} };

  // componentDidMount() {
  //   this.setState(
  //     {
  //       query: this.props.url.query.search
  //     },
  //     this.handleRequest
  // }

  static async getInitialProps(req) {
    const {search} =  req.query

    const API = "http://localhost:3001";
    const response = await fetch(`${API}/items?search=${search}`);
    const { items } = await response.json();


    return { items }
  }

  render() {
    const { items } = this.props

    if (false) {
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
            {items.slice(0,4).map(
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

export default Items