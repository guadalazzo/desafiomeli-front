import Product from "../components/Product";
export default () => (
  <article>
    <Product/>

    <style jsx>
      {`
        article {
          background: white;
          max-width: 80%;
          margin: 0 auto;
        }
      `}
    </style>
  </article>
);
