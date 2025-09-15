import { Button, Input, Select, useGetDevice } from "react-bricks";
import cx from "classnames";

const AddCustomer = ({
  setIsAddCustomer,
}: {
  setIsAddCustomer: (value: boolean) => void;
}) => {
  const device = useGetDevice();

  const customClass = cx({ flexRow: device !== "mobile" });
  return (
    <div className="add-branch">
      <Input value={""} onChange={() => {}} placeholder="Name" inputId="name" />
      <div className={customClass}>
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Mobile"
          inputId="mobile"
          customClass="pt-2"
          maxLength={10}
          isNumber
        />
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Locality"
          inputId="locality"
          customClass="pt-2"
        />
      </div>

      <Select
        inputId="branch"
        options={[
          { id: 1, label: "Panjapatti" },
          { id: 2, label: "Tharagampatti" },
        ]}
        value={""}
        onSelect={() => {}}
        placeholder="Select Branch"
        customClass="pt-2"
      />
      <Select
        inputId="collection_type"
        options={[
          { id: 1, label: "Daily" },
          { id: 2, label: "Weekly" },
          { id: 3, label: "Monthly" },
        ]}
        value={""}
        onSelect={() => {}}
        placeholder="Select Collection Type"
        customClass="pt-2"
      />
      <div className={customClass}>
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Principal Amount"
          inputId="principal_amount"
          customClass="pt-2"
          isNumber
        />
        <Input
          value={""}
          onChange={() => {}}
          placeholder="Payable Amount"
          inputId="payable_amount"
          customClass="pt-2"
          isNumber
        />
      </div>

      <Input
        value={""}
        onChange={() => {}}
        placeholder="Interest Rate"
        inputId="interest_rate"
        customClass="pt-2"
        isNumber
      />
      <div className="pt-2 flexColumn">
        <Button id="br_add" variant="primary" label="Add" loaderColor="white" />
        <Button
          id="br_cancel"
          variant="secondary"
          label="Cancel"
          onClick={() => setIsAddCustomer(false)}
        />
      </div>
    </div>
  );
};

export default AddCustomer;
