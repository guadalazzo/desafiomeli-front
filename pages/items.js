import Layout from "../components/Layout";
import ItemProd from "../components/ItemProd";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import "isomorphic-fetch";

require("isomorphic-fetch");

export default class Items extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const API = "http://localhost:3001";
    const { search } = query;
    console.log(search);
    const response = await fetch(`${API}/items?search=${search}`);
    const {
      itemsearch: { results }
    } = await response.json();

    return { results };
  }

  render() {
    const { results } = this.props;
    console.log(results);
    return (
      <Layout>
        <Breadcrumbs />
        <div className="container">
          <div className="items">
            {results.map(item => (
              <ItemProd
                key={item.id}
                id={item.id}
                name={item.title}
                price={item.price}
                image={item.thumbnail}
                location={item.seller_address.state.name}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
          }
          .container {
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
