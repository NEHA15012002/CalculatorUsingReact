import MissedGoal from './MissedGoal';
import MadeGoal from './MadeGoal';

function Helper(props){
    let isGoal=props.isGoal;
    if(isGoal)
    {
        return <MadeGoal/>
    }else {
        return <MissedGoal/>
    }
}

export default Helper;