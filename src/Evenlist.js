
function Evenlist(props)
{ 
function show(val)
{   
    if(val%2==0){
        return <li>{val}</li>
    }
    
    
}
const data =props.lst.map(show)
return(
    <ul>
        {data}
    </ul>
)
}

export default Evenlist;