import TopPanel from "../components/TopPanel";
import addIcon from "../assets/icons/add.svg";
import { DataTable, Modal, useGetDevice } from "react-bricks";
import { useState } from "react";
import closeIcon from "../assets/icons/close.svg";
import AddCollection from "../components/AddCollection";

const Collections = () => {
  const device = useGetDevice();
  const [isAddCollection, setIsAddCollection] = useState(false);

  const columns = [
    { key: "id", label: "ID" },
    { key: "amount", label: "Paid amount" },
    { key: "dues_to_pay", label: "Dues to pay" },
    { key: "next_bill_cycle", label: "Next bill cycle" },
    { key: "status", label: "Status" },
    { key: "note", label: "Note" },
    { key: "created_by", label: "Created by" },
  ];

  const data = [
    {
      id: 1,
      amount: 10000,
      dues_to_pay: 1,
      next_bill_cycle: "15/09/2025",
      note: "Test",
      status: "Pending",
      created_by: "Mohan",
    },
    {
      id: 2,
      amount: 12000,
      dues_to_pay: 1,
      next_bill_cycle: "15/09/2025",
      note: "Test",
      status: "Pending",
      created_by: "Mohan",
    },
    {
      id: 3,
      amount: 10000,
      dues_to_pay: 1,
      next_bill_cycle: "15/09/2025",
      note: "Test",
      status: "Pending",
      created_by: "Mohan",
    },
    {
      id: 4,
      amount: 10000,
      dues_to_pay: 1,
      next_bill_cycle: "15/09/2025",
      note: "Test",
      status: "Pending",
      created_by: "Mohan",
    },
    {
      id: 5,
      amount: 13000,
      dues_to_pay: 1,
      next_bill_cycle: "15/09/2025",
      note: "Test",
      status: "Pending",
      created_by: "Mohan",
    },
  ];

  return (
    <>
      <TopPanel
        title="Collections"
        btnLabel="Add Collection"
        onClick={() => setIsAddCollection(true)}
        buttonIcon={addIcon}
      />
      <DataTable
        columns={columns as never}
        data={data}
        // onAction={(data) => {
        // navigate(`/collection?customer_id=${data.id}`);
        // console.log("--onAction", { data });
        // }}
        // onDelete={(data) => console.log("--onDelete", { data })}
        onEdit={(data) => console.log("--onEdit", { data })}
        isAction
        isSorting
        isOuterBorderLess
        isPagination
        paginationPlacement={device === "mobile" ? "center" : "right"}
      />
      <div className="add-branch">
        <Modal
          id="add_customer"
          title="Add Collection"
          isShowModal={isAddCollection}
          closeIcon={closeIcon}
          onModalClose={() => setIsAddCollection(false)}
          maxWidth="595"
          children={<AddCollection setIsAddCollection={setIsAddCollection} />}
          isStickyHeader
        />
      </div>
    </>
  );
};

export default Collections;
