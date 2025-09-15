import { useState } from "react";
import { DataTable, Modal, useGetDevice } from "react-bricks";
import { useNavigate } from "react-router-dom";
import TopPanel from "../components/TopPanel";
import AddCustomer from "../components/AddCustomer";
import closeIcon from "../assets/icons/close.svg";
import addIcon from "../assets/icons/add.svg";
import '../assets/styles/customers.scss';

const Customers = () => {
  const [isAddCustomer, setIsAddCustomer] = useState(false);
  const device = useGetDevice();
  const navigate = useNavigate();
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "mobile", label: "Mobile" },
    { key: "locality", label: "Locality" },
    { key: "branch", label: "Branch" },
    { key: "collection_type", label: "Collection type" },
    { key: "principal_amount", label: "Principal amt" },
    { key: "interest_rate", label: "Interest rate" },
    { key: "payable_amount", label: "Payable amt" },
  ];

  const data = [
    {
      id: 1,
      name: "Chennai",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Daily",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 2,
      name: "Bob",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Monthly",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 3,
      name: "Charlie",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Daily",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 4,
      name: "David",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Weekly",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 5,
      name: "Eve",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Daily",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 6,
      name: "Frank",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Weekly",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 7,
      name: "Grace",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Daily",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 8,
      name: "Chennai",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Weekly",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 9,
      name: "Bob",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      collection_type: "Weekly",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
    {
      id: 10,
      name: "Charlie",
      mobile: 9876543210,
      locality: "Tharagampatti",
      branch: "Panjapatti",
      principal_amount: "10000",
      interest_rate: "3",
      payable_amount: "12000",
    },
  ];
  return (
    <div className="customer-content">
      <TopPanel
        title="Customers"
        btnLabel="Add Customer"
        onClick={() => setIsAddCustomer(!isAddCustomer)}
        buttonIcon={addIcon}
      />
      <DataTable
        columns={columns as never}
        data={data}
        onAction={(data) => {
          navigate(`/collection?customer_id=${data.id}`);
          console.log("--onAction", { data });
        }}
        onDelete={(data) => console.log("--onDelete", { data })}
        onEdit={(data) => console.log("--onEdit", { data })}
        isAction
        isSorting
        isOuterBorderLess
        isPagination
        paginationPlacement={device === "mobile" ? "center" : "right"}
        isMoreBtn
      />
      <div className="add-branch">
        <Modal
          id="add_customer"
          title="Add Customer"
          isShowModal={isAddCustomer}
          closeIcon={closeIcon}
          onModalClose={() => setIsAddCustomer(false)}
          maxWidth="595"
          children={<AddCustomer setIsAddCustomer={setIsAddCustomer} />}
          isStickyHeader
        />
      </div>
    </div>
  );
};

export default Customers;
