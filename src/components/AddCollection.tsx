import { Button, Input } from "react-bricks";

const AddCollection = ({
  setIsAddCollection,
}: {
  setIsAddCollection: (value: boolean) => void;
}) => {
  return (
    <div className="add-collection">
      <Input
        value={""}
        onChange={() => {}}
        placeholder="Amount"
        inputId="collection_amount"
        customClass="pt-2"
        isRequired
        isNumber
      />
      <Input
        value=""
        onChange={() => {}}
        placeholder="No of dues to pay"
        inputId="collection_dues_to_pay"
        customClass="pt-2"
        isDisabled
      />
      <Input
        value=""
        onChange={() => {}}
        placeholder="Next bill cycle"
        inputId="collection_next_bill_cycle"
        customClass="pt-2"
      />
      <Input
        value=""
        onChange={() => {}}
        placeholder="Note"
        inputId="collection_note"
        customClass="pt-2"
      />
      <div className="pt-2 flexColumn">
        <Button id="collection-add" variant="primary" label="Add" />
        <Button
          id="collection-cancel"
          variant="secondary"
          label="Cancel"
          onClick={() => setIsAddCollection(false)}
        />
      </div>
    </div>
  );
};

export default AddCollection;
