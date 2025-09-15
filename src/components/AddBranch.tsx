import { Button, Input } from "react-bricks";

const AddBranch = ({
  setIsAddBranch,
}: {
  setIsAddBranch: (value: boolean) => void;
}) => {
  return (
    <div className="add-branch">
      <Input
        value={""}
        onChange={() => {}}
        placeholder="Branch Name"
        inputId="br_name"
        variant="ghost"
      />
      <Input
        value={""}
        onChange={() => {}}
        placeholder="Branch Code"
        inputId="br_code"
        customClass="pt-2"
      />
      <div className="pt-2 flexColumn">
        <Button
          id="br_add"
          variant="primary"
          label="Add"
          // isLoading
          loaderColor="white"
        />
        <Button
          id="br_cancel"
          variant="secondary"
          label="Cancel"
          onClick={() => setIsAddBranch(false)}
        />
      </div>
    </div>
  );
};

export default AddBranch;
