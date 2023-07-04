import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

function FormWrapper({title, children}: FormWrapperProps) {
  return (
    <>
        <h2 style={{textAlign: "center", margin: 0, marginBlock: "2rem", fontSize: "2.5rem"}}>{title}</h2>
        <div style={{width: "100%", display: "flex", gap: "1rem", flexDirection: "column"}}>{children}</div>
    </>
  )
}

export default FormWrapper