import { Calculator } from 'containers/calculator/calculator'
import 'app.css'

export function App() {
    let theme = 'dark'
    return (
        <div className={"screen " + theme}>
            <Calculator />
        </div>
    )
}