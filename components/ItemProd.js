import Router from "next/router";

const CURRENCIES = {
  ARS: "$"
};

class ItemProd extends React.Component {

  render() {
    const { ...item } = this.props;
    const { id } = item;

    return (
      <div className="item">
        <a
          href={`items/${item.id}`}
          className="product-item"
        >
          <figure>
            <img src={item.image} alt="product view" />
            <div className="data">
              <span className="price">
                {CURRENCIES[item.currency]}
                {item.price}
              </span>
              <h2>{item.name}</h2>
            </div>
          </figure>
          <span className="location">{item.location}</span>
        </a>
        <style jsx>{`
          .item{
            border-bottom: 1px solid #EEEEEE;
          }
          .product-item {
            display: flex;
            padding: 16px;
            justify-content: space-around;
            width: 100%;
            text-decoration: none;
            transition: 0.5s ease-in-out;
          }
          .link__inside {
            display: flex;
            justify-content: space-around;
            padding: 16px;
            cursor: pointer;
            width: 100%;
          }
          .product-item:hover {
            opacity: 0.7;
          }
          .location {
            color: #666666;
            margin: 32px;
          }
          .data {
            margin: 16px;
          }
          .price {
            margin-bottom: 32px;
            font-size: 22px;
            color: #333333;
          }
          h2 {
            font-size: 18px;
            color: #333333;
            font-weight: 400;
          }
          figure {
            display: flex;
            width: 80%;
            margin: 0;
          }
          figure img {
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }
}
export default ItemProd