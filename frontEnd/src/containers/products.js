import React from "react";
import ProductCard from "../components/productCard";
import queryString from "query-string";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { responseItems: [] };
  }

  async callAPI() {
    let params = queryString.parse(this.props.location.search);
    await fetch(`http://localhost:9000/api/items?q=${params.search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ responseItems: res });
      });
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="main">
        <div className="row">
          {this.state.responseItems.categories &&
            this.state.responseItems.categories.map((category, i) => (
              <React.Fragment key={i}>
                <p>{category.name} </p>
                {i + 1 < this.state.responseItems.categories.length && (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#666">
                      <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z"></path>
                      <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z"></path>
                    </g>
                  </svg>
                )}
              </React.Fragment>
            ))}
        </div>
        <section className="results">
          {this.state.responseItems.items &&
            this.state.responseItems.items.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
        </section>
      </div>
    );
  }
}

export default Products;
