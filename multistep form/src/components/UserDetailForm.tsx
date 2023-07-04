import FormWrapper from "./FormWrapper";

type UserForm = {
  firstName: string
  lastName: string
  age: string
}
type UserFormProps = UserForm & {
  updateFields: (fields: Partial<UserForm>) => void
}

function UserDetailForm({firstName, lastName, age, updateFields}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <div className="input-div">
        <label className="label">First Name</label>
        <input required autoFocus type="text" value={firstName} name="" id="" className="input" onChange={e => updateFields({firstName : e.target.value})} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">Last name</label>
        <input required type="text" name="" id="" className="input" onChange={e => updateFields({lastName : e.target.value})} value={lastName} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">Age</label>
        <input required type="number" name="" id="" className="input" onChange={e => updateFields({age: e.target.value})} value={age} />
      </div>
    </FormWrapper>
  );
}

export default UserDetailForm;
