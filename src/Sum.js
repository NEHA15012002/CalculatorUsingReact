
function Sumlist(props){
let sum = 0;
 const data =props.lst.map(function(val){
    sum+=val;
   })
  return sum

}
export default Sumlist;