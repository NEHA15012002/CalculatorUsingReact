function Use(){
    const lst=[1,2,3,4];
    return(
        <li>{lst}</li>
    )
}

function Mping()
{
    const lst=[1,2,3,4];
    const data =lst.map(function(val){
      return <li>{val}</li>
    })
    return(
        <ul>
            {data}
        </ul>
    )


}

function Method2()
{ const lst=[1,2,3,4];
function show(val)
{
    return <li>{val}</li>
}
const data =lst.map(show)
return(
    <ul>
        {data}
    </ul>
)
}

export default Method2;