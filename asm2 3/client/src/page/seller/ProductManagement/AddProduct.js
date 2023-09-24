import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getCategories, allAttributes } from "../../../api/category";
import { createProduct, getProduct } from "../../../api/seller";

export default function AddProduct({ setProducts, showToast }) {
  const [formValues, setFormValues] = useState({
    productName: "",
    productPrice: 0,
    productDescription: "",
    productImg: "",
    selectedCategory: null,
    attributeValues: {},
  });

  const [categories, setCategories] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);

  const fetchProduct = async () => {
    let data = null;
    try {
      data = await getProduct();
    } catch (err) {}
    if (data) {
      setProducts(data);
    }
  };

  const loadCategories = async () => {
    let allCategories = null;
    try {
      allCategories = await getCategories();
    } catch (err) {}
    if (allCategories) {
      setCategories(allCategories);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const fetchAttribute = async (categoryId) => {
    const attributes = await allAttributes(categoryId);
    setProductAttributes(attributes);
  };

  useEffect(() => {
    if (formValues.selectedCategory) {
      fetchAttribute(formValues.selectedCategory);
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        attributeValues: {},
      }));
    }
  }, [formValues.selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      selectedCategory: categoryId,
    }));
  };

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const handleAttributeChange = (attributeName, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      attributeValues: {
        ...prevFormValues.attributeValues,
        [attributeName]: {
          name: attributeName,
          required:
            productAttributes.find((attr) => attr.name === attributeName)
              ?.required || false,
          type:
            productAttributes.find((attr) => attr.name === attributeName)
              ?.type || "text",
          value: value,
        },
      },
    }));
  };

  const checkEmpty = () => {
    if (!formValues.productImg) {
      showToast("Please Enter the Required Img Url");
      return false;
    }

    if (!formValues.productPrice) {
      showToast("Please Enter the required Product's Price");
      return false;
    }

    if (!formValues.productName) {
      showToast("Please Enter the required Product's Tille");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attributesArray = Object.values(formValues.attributeValues);

    if (!checkEmpty()) {
      return;
    }

    const productData = {
      name: formValues.productName,
      description: formValues.productDescription,
      img: formValues.productImg,
      category: formValues.selectedCategory,
      attributes: attributesArray,
      price: formValues.productPrice,
    };

    const res = await createProduct(productData)
      .then((res) => {
        loadCategories();
        showToast("New Product Created");
        fetchProduct();
        setFormValues({
          productName: "",
          productPrice: 0,
          productDescription: "",
          productImg: "",
          selectedCategory: null,
          attributeValues: {},
        });
      })
      .catch((err) => showToast("Fail to Create new Product"));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mx-3 mb-2 border-1 rounded-3 bg-light"
    >
      <Form.Group>
        <Form.Label className="mt-2">Title</Form.Label>
        <Form.Control
          type="text"
          value={formValues.productName}
          onChange={(e) => handleFieldChange("productName", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="mt-2">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          type="text"
          value={formValues.productDescription}
          onChange={(e) =>
            handleFieldChange("productDescription", e.target.value)
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="mt-2">Product Price</Form.Label>
        <Form.Control
          type="number"
          value={formValues.productPrice}
          onChange={(e) => handleFieldChange("productPrice", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="mt-2">Image URL</Form.Label>
        <Form.Control
          type="text"
          value={formValues.productImg}
          onChange={(e) => handleFieldChange("productImg", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="mt-2">Category</Form.Label>
        <Form.Control
          as="select"
          value={formValues.selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value={null}>Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {productAttributes?.length > 0 && <h3>Additional Attributes</h3>}
      {productAttributes?.map((attribute) => (
        <Form.Group key={attribute.name}>
          <Form.Label className="mt-2">
            <strong>{attribute.name} </strong> - {attribute.type} -{" "}
            {attribute.required ? "required" : "optional"}
          </Form.Label>
          <Form.Control
            type={attribute.type === "number" ? "number" : "text"}
            required={attribute.required}
            value={formValues.attributeValues[attribute.name]?.value || ""}
            onChange={(e) =>
              handleAttributeChange(attribute.name, e.target.value)
            }
          />
        </Form.Group>
      ))}
      <div>
        <Button
          type="submit"
          className="p-3"
          style={{ margin: "10px 25%", width: "45%", borderRadius: "25px" }}
        >
          Create Product
        </Button>
      </div>
    </Form>
  );
}
