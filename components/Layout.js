
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CustomHead from "../components/CustomHead";
export default props => (
  <div>
    <CustomHead/>
    <Header>
      <SearchBox />
    </Header>

    {props.children}

    <style jsx>{`
      :global(body) {
        background: #f0f0f0;
        margin: 0;
        font-family: system-ui;
      }
    `}</style>
  </div>
);
