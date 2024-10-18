import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

const AddToCart = () => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    {
      id: 1,
      name: "Organic Soil Mix",
      price: 19.99,
      description: "Premium organic soil mix for healthy plant growth.",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "LED Grow Light",
      price: 89.99,
      description: "Energy-efficient LED grow light for indoor plants.",
      image:
        "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Hydroponic Starter Kit",
      price: 129.99,
      description: "Complete hydroponic system for beginners.",
      image:
        "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const handleQuantityChange = (productId, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + amount),
    }));
  };

  useEffect(() => {
    const newTotalPrice = products.reduce((total, product) => {
      return total + product.price * (quantities[product.id] || 0);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [quantities]);

  return (
    <div className="container mx-auto p-4 py-16">
      <Typography variant="h2" className="mb-6">
        Our Products
      </Typography>
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-2/3">
          <List>
            {products.map((product) => (
              <ListItem key={product.id} className="py-4">
                <div className="flex w-full">
                  <ListItemPrefix>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 object-cover rounded-lg"
                    />
                  </ListItemPrefix>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full ml-4">
                    <div>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        {product.description}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        ${product.price.toFixed(2)}
                      </Typography>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        <FiMinus />
                      </Button>
                      <Typography className="mx-2">
                        {quantities[product.id] || 0}
                      </Typography>
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        <FiPlus />
                      </Button>
                    </div>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card className="w-full md:w-1/3">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4">
              Cart Summary
            </Typography>
            {products.map((product) => {
              const quantity = quantities[product.id] || 0;
              if (quantity === 0) return null;
              return (
                <div key={product.id} className="flex justify-between mb-2">
                  <Typography>
                    {product.name} (x{quantity})
                  </Typography>
                  <Typography>
                    ${(product.price * quantity).toFixed(2)}
                  </Typography>
                </div>
              );
            })}
            <hr className="my-4" />
            <div className="flex justify-between">
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
            </div>
            <Button
              fullWidth
              className="mt-4 flex items-center justify-center gap-2"
            >
              <FiShoppingCart /> Checkout
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddToCart;
