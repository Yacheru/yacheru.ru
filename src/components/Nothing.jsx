import Typewriter from 'typewriter-effect';
import './nothing.css';

export default function Nothing () {
    return (
        <h1>
            <Typewriter 
                onInit={(Typewriter) => {
                    Typewriter.typeString('nothing interesting here go away...').start()
                }}
            />
        </h1>
    )
}