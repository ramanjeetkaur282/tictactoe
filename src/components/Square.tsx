
interface ISquareProps{
    onClick:() => void,
    value: string | null,
    winner:string | null
}

const Square: React.FC<ISquareProps>=({onClick,value,winner})=>{
   
    if(!value){
        return(
            <button 
            className="board-square"
            disabled={Boolean(winner)}
            onClick={onClick} 
            />
    )
    }

    return(
        <button 
        className={`board-square square_${value}`}
        disabled>
        {value}
        </button>
    )
    
}

export default Square;