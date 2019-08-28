import React from "react";
import Product from "../components/productDetail";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async callAPI() {
    await fetch(`http://localhost:9000/api/items/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ responseItem: res });
      });
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="main results">
        {!!this.state.responseItem && (
          <Product product={this.state.responseItem} />
        )}
      </div>
    );
  }
}

export default ProductDetail;
