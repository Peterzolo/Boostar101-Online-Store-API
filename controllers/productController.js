import data from "../data.js";

export const getProducts = async (req, res) => {
  try {
    res.status(200).send(data.products);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductDetail = async (req, res) => {
  const product = data.products.find((p) => p._id === req.params.id);

  if (!product) {
    return res.status(404).send({ message: "No product found" });
  } else {
    return res.status(200).send(product);
  }
};
