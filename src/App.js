import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Grey chair',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'tables.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'light',
          price: '29.99'
        },
        {
          id: 5,
          title: 'Bed',
          img: 'bed.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'beds',
          price: '249.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Items items={this.state.items}></Items>
      <Footer></Footer>
    </div>
  );
 }
 addToOrder(item) {
  this.setState({ orders: [...this.state.orders, item] })
 }
}

export default App;
