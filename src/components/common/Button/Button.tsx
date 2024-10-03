import { Props } from '../../../utils/interfaces/props.interface';
import './Button.css'

function Button({ children }: Props) {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;