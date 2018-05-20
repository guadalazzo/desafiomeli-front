import { Router } from "../routes"

class SearchBox extends React.Component {
  state = {
    query: "",
     isLoading: true
  };
  componentDidMount() {
        this.setState({ isLoading: false });
  }
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    Router.pushRoute(`/items?search=${query}`);
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar..."
          name="query"
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">
          <i className="search-ic" />
        </button>

        <style jsx>{`
          form {
            position: relative;
            width: 85%;
          }
          form input {
            width: 100%;
            border: none;
            border-radius: 3px;
            padding-left: 1em;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            height: 39px;
          }
          input ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #cecece;
            font-size: 16px;
          }
          input::-moz-placeholder {
            /* Firefox 19+ */
            color: #cecece;
            font-size: 16px;
          }
          input:-ms-input-placeholder {
            /* IE 10+ */
            color: #cecece;
            font-size: 16px;
          }
          input:-moz-placeholder {
            /* Firefox 18- */
            color: #cecece;
            font-size: 16px;
          }
          button {
            cursor: pointer;
            background: white;
            position: absolute;
            top: 0;
            right: 0;
            width: 39px;
            height: 34px;
            top: 3px;
            border: none;
            border-left: 1px solid #e6e6e6;
          }
          .search-ic:before {
            content: "";
            width: 39px;
            height: 29px;
            display: block;
            background: url(../static/ic_search.png) no-repeat center;
            background-size: 21px;
          }
        `}</style>
      </form>
    );
  }
}
export default SearchBox