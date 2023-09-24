import React, { useState, useEffect } from "react";
import {
  addCategoryAttribute,
  deleteCategory,
  createCategory,
} from "../../../api/admin";
import {
  getCategories,
  organizeCategoriesIntoTree,
} from "../../../api/category";
import CategoryCard from "./CartegoryCard";
import CategoryForm from "./CategoryForm";
import LoaderSpinner from "../../../components/LoaderSpinner";

const CategoryMana = ({ showToast }) => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    let allCategories = null;
    try {
      allCategories = await getCategories();
    } catch (err) {
      showToast("Can not load category");
    }

    if (allCategories) {
      const organizedCategories = organizeCategoriesIntoTree(allCategories);
      setCategories(organizedCategories);
      setLoading(false);
    }
  };

  const handleAddAttribute = async (
    categoryId,
    attributeName,
    required,
    type
  ) => {
    await addCategoryAttribute(categoryId, attributeName, required, type).then(
      (res) => showToast("New attribute added!")
    );
    loadCategories();
  };

  const handleDeleteCategory = async (categoryId) => {
    await deleteCategory(categoryId)
    loadCategories();
  };

  const handleCreate = async () => {
    await handleCreateCategory(null, newCategoryName).then((res) =>
      showToast("Created!")
    );
    setNewCategoryName("");
  };

  const handleCreateCategory = async (parentId, newCategoryName) => {
    if (newCategoryName) {
      await createCategory(parentId, newCategoryName);
      loadCategories();
    }
  };

  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <div className="category-tree mx-2 mt-3">
      <CategoryForm
        handleAction={{
          handleCreate: handleCreate,
          setNewCategoryName: setNewCategoryName,
        }}
        showToast={showToast}
      />
      <div className="mt-3 bg-light">
        <h2>Category Tree</h2>
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            handleDeleteCategory={handleDeleteCategory}
            handleCreateCategory={handleCreateCategory}
            handleAddAttribute={handleAddAttribute}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMana;
