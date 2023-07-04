import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields : (fields: Partial<AccountData>) => void
}

function AccountForm({email, password, updateFields}: AccountFormProps) {
  return (
    <FormWrapper title="Account">
      <div className="input-div">
        <label htmlFor="" className="label">
          Email
        </label>
        <input required autoFocus type="email" name="" id="" className="input" value={email} onChange={e => updateFields({email:e.target.value})} />
      </div>
      <div className="input-div">
        <label htmlFor="" className="label">
          Password
        </label>
        <input required type="password" name="" id="" className="input" value={password} onChange={e => updateFields({password:e.target.value})} />
      </div>
    </FormWrapper>
  );
}

export default AccountForm;
