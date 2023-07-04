import FormWrapper from "./FormWrapper";

type AddressData = {
    street: string
    city: string
    state: string
    zip: string
  }
  
  type AddressFormProps = AddressData & {
    updateFields : (fields: Partial<AddressData>) => void
  }

function AddressForm({street, city, state, zip, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <div className="input-div">
        <label htmlFor="" className="label">Street</label>
        <input required autoFocus type="text" name="" id="" className="input" value={street} onChange={e => updateFields({street: e.target.value})} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">City</label>
        <input required type="text" name="" id="" className="input" value={city} onChange={e => updateFields({city: e.target.value})} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">State</label>
        <input required type="text" name="" id="" className="input" value={state} onChange={e => updateFields({state: e.target.value})} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">Zip</label>
        <input required type="number" name="" id="" className="input" value={zip} onChange={e => updateFields({zip: e.target.value})} />
      </div>
    </FormWrapper>
  );
}

export default AddressForm;
