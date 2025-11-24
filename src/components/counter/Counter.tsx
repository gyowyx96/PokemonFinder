import "./counter.scss"
const Counter = ({count}: {count : number }) =>{
    return (
        <div className= "counter">
            <p>Pokemon catturati: {count}</p>
        </div>
    )
}

export default Counter