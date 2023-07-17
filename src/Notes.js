export function Notes(props)
{   let name="Neha";
    let num=5;
    let result ="";
    if(num>0)
    {
      result ="positive num hence have a positive outlook :)";
    } else 
    {
        result= "negative koina there are good days and bad days";
    }
    return (
    <div>
    <h1>Notes:7th July<br/> Topic: React</h1>
    <h2>Component can be exported in 2 ways</h2>
    <p>Named Export and Default Export</p>
    <h2>Multiple tags</h2>
    <p>We need to enclose the tag in div or empty tag otherwise multiple tag nahi use kr sakteh</p>
    <h2>We need to close all tags</h2>
    <p>Example see in the .js file used to render this code</p>
    <form>
        <input type ="text"/>
    </form>
    <h2>JsX</h2>
    <p>return html in js</p>
    <h2>JsX Expression in curly braces and variables </h2>
    <p>{5+5}</p>
    <p>{name}</p>
    <p>{result}</p>
    <p>Second method vai ternary operator</p>
    <p>{num>0?"positive":"negative"}</p>
    <p>Third method vai logical operator</p>
    <p>{num>0 &&"positive"}</p>
    <h2>Attention</h2>
    <p>Always use className in camel case not class</p>
    <p>props is a keywod in react </p>
    <p>{props.num2 * props.num2}</p>
    <p>default export can be used to export the single component ex export default App;</p>
   </div>
    )
}