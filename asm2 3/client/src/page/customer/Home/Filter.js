import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import { organizeCategoriesIntoTree } from "../../../api/category";
import HierarchicalSelect from "./HierarcicalSelect";
const Filter = ({
  searchName,
  removeFilter,
  decision,
  order,
  handleSearchName,
  categories,
  handleFilter,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <>
      <div className=" d-flex" style={{ marginRight: "10rem" }}>
        <input
          placeholder="Search in Lazada"
          className="mr-sm-2 p-3 border-radius-3"
          value={searchName}
          onChange={(e) => handleSearchName(e.target.value)}
        ></input>
      </div>
      <Dropdown className={`mx-1`}>
        <Dropdown.Toggle
          variant={decision === "price" ? "primary" : "light"}
          id="dropdown-basic"
        >
          Filter By Price
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleFilter(-1, "price");
            }}
            active={decision === "price" && order === -1}
          >
            Descending Order
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleFilter(1, "price");
            }}
            active={decision === "price" && order === 1}
          >
            Acsending Order
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mx-1">
        <Dropdown.Toggle
          variant={decision === "name" ? "primary" : "light"}
          id="dropdown-basic"
        >
          Filter By Name
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleFilter(-1, "name");
            }}
            active={decision === "name" && order === -1}
          >
            Descending Order
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleFilter(1, "name");
            }}
            active={decision === "name" && order === 1}
          >
            Acsending Order
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mx-1">
        <Dropdown.Toggle
          variant={decision === "date" ? "primary" : "light"}
          id="dropdown-basic"
        >
          Filter By Date Added
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleFilter(-1, "date");
            }}
            active={decision === "date" && order === -1}
          >
            Descending Order
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleFilter(1, "date");
            }}
            active={decision === "date" && order === 1}
          >
            Acsending Order
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <HierarchicalSelect
        categoriesData={organizeCategoriesIntoTree(categories)}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      ></HierarchicalSelect>

      <Button
        className="bg-danger text-white"
        variant="light"
        onClick={removeFilter}
      >
        Remove Filter
      </Button>
    </>
  );
};

export default Filter;
