import React from "react";
import { Container, Form, Row } from "react-bootstrap";

function CategorySelect({
  category,
  selectedCategories,
  handleCategoryChange,
}) {
  const isSelected = selectedCategories.includes(category._id);

  const handleSelectChange = () => {
    handleCategoryChange(category._id);
  };

  return (
    <div key={category._id}>
      <Form.Check
        type="checkbox"
        id={`category-${category._id}`}
        label={category.name}
        checked={isSelected}
        onChange={handleSelectChange}
      />
      {category.subcategories.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {category.subcategories.map((subCategory) => (
            <CategorySelect
              key={subCategory._id}
              category={subCategory}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HierarchicalSelect({
  categoriesData,
  selectedCategories,
  setSelectedCategories,
}) {
  const handleCategoryChange = (categoryId) => {
    const category = findCategoryById(categoryId, categoriesData);
    if (!selectedCategories.includes(categoryId)) {
      let newSelectedCategories = [
        ...selectedCategories,
        ...getAllSubcategoryIds(category, []),
      ];
      console.log(newSelectedCategories);
      setSelectedCategories(newSelectedCategories);
    } else {
      const allSub = getAllSubcategoryIds(category, []);
      const newSelectedCategories = selectedCategories.filter(
        (id) => !allSub.includes(id)
      );

      setSelectedCategories(newSelectedCategories);
    }
  };
  const findCategoryById = (categoryId, categories) => {
    for (const category of categories) {
      if (category._id === categoryId) {
        return category;
      }
      if (category.subcategories.length > 0) {
        const subCategory = findCategoryById(
          categoryId,
          category.subcategories
        );
        if (subCategory) {
          return subCategory;
        }
      }
    }
    return null;
  };

  function getAllSubcategoryIds(category, subcategoryIds = []) {
    subcategoryIds.push(category._id);

    if (category.subcategories.length > 0) {
      for (const subcategory of category.subcategories) {
        getAllSubcategoryIds(subcategory, subcategoryIds);
      }
    }

    return subcategoryIds;
  }

  return (
    <Container>
      <Row>
        <div>
          <h3 style={{ wordWrap: "break-word" }}>Categories</h3>
          {categoriesData.map((categoryData) => (
            <CategorySelect
              key={categoryData._id}
              category={categoryData}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default HierarchicalSelect;
