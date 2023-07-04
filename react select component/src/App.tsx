import { useState } from "react"
import Select, { SelectOption } from "./components/Select"

const options = [
    {label: "First", value: 1},
    {label: "Second", value: 2},
    {label: "Third", value: 3},
    {label: "Four", value: 4},
]

function App() {
    const [value1, setValue1] = useState<SelectOption[]>([options[0]])
    const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
    <div>
        <Select multiple={true} options={options} value={value1} onChange={o => setValue1(o)} />
        <br />
        <Select multiple={false} options={options} value={value2} onChange={o => setValue2(o)} />
    </div>
  )
}

export default App