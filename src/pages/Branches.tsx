import { DataTable, Modal, useGetDevice } from "react-bricks";
import TopPanel from "../components/TopPanel";
import AddBranch from "../components/AddBranch";
import { useState } from "react";
import closeIcon from "../assets/icons/close.svg";
import addIcon from "../assets/icons/add.svg";

const Branches = () => {
  const [isAddBranch, setIsAddBranch] = useState(false);
  const device = useGetDevice();
  const columns = [
    { key: "id", label: "ID" },
    { key: "branch_code", label: "Branch code" },
    { key: "branch_name", label: "Branch name" },
  ];

  const data = [
    { id: 1, branch_name: "Chennai", branch_code: 28 },
    { id: 2, branch_name: "Bob", branch_code: 34 },
    { id: 3, branch_name: "Charlie", branch_code: 22 },
    { id: 4, branch_name: "David", branch_code: 45 },
    { id: 5, branch_name: "Eve", branch_code: 30 },
    { id: 6, branch_name: "Frank", branch_code: 26 },
    { id: 7, branch_name: "Grace", branch_code: 38 },
    { id: 8, branch_name: "Chennai", branch_code: 28 },
    { id: 9, branch_name: "Bob", branch_code: 34 },
    { id: 10, branch_name: "Charlie", branch_code: 22 },
    { id: 11, branch_name: "David", branch_code: 45 },
    { id: 12, branch_name: "Eve", branch_code: 30 },
    { id: 13, branch_name: "Frank", branch_code: 26 },
    { id: 14, branch_name: "Grace", branch_code: 38 },
  ];

  return (
    <div className="branch-content">
      <TopPanel
        title="Branches"
        btnLabel="Add Branch"
        onClick={() => setIsAddBranch(!isAddBranch)}
        buttonIcon={addIcon}
      />
      <DataTable
        columns={columns as never}
        data={data}
        onDelete={() => {}}
        onEdit={() => {}}
        isAction
        isSorting
        isPagination
        isOuterBorderLess
        paginationPlacement={device === "mobile" ? "center" : "right"}
        // isPaginationRight
      />
      <div className="add-branch">
        <Modal
          id="add_branch"
          title="Add Branch"
          isShowModal={isAddBranch}
          closeIcon={closeIcon}
          onModalClose={() => setIsAddBranch(false)}
          maxWidth="595"
          children={<AddBranch setIsAddBranch={setIsAddBranch} />}
        />
      </div>
    </div>
  );
};

export default Branches;
