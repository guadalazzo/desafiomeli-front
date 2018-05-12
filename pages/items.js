import Layout from "../components/Layout";
import ItemProd from "../components/ItemProd";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from 'next/link'
import 'isomorphic-fetch';

require("isomorphic-fetch");

export default class Items extends React.Component {
  static async getInitialProps() {
    const req = await fetch("http://localhost:3001/items");
    const items = await req.json();

    return {items};
  }

  render() {
    const {items} = this.props;

    return (
      <Layout>
        <Breadcrumbs />
        <div className="container">
          <div className="items">
            {items.map(item => (
              <ItemProd
                key={item.id}
                id={item.id}
                //item={item}
                name={item.name}
                price={item.price}
                location={item.location}
                image={item.image}
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
          .container{
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