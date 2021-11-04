marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function resethere(){ 
    document.getElementById("text").value = ''
  }


/*
function resethere(){
    console.log(""){
    document.getElementById(" ").value = ''
  }
}

*/

function App() {

    const [text, setText] = React.useState(localStorage.getItem("storeItem"));

function save(text){  /*to save the content*/
    setText(text)
    var Item = document.getElementById("text").value;
    localStorage.setItem("storeItem", Item); 
    document.getElementById("savedText").innerHTML = Item + "SAVED";
}

    return (
     <div className="text-center px-4">

<textarea 
name="text" 
id="text"
value={text}
onChange={(e) => save(e.target.value)}
rows="10" 
className="textarea"
></textarea>

<Preview markdown={text}/>
     </div> 
    );
}

function Preview({markdown}) {
    return (
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, {renderer: renderer}), 

        }}
        id="preview"
    ></div>
    );
}

/*Clear function */
/*
function clearIt("text") {
    document.getElementById("text").value = "";
   }

   */
ReactDOM.render(<App/>, document.getElementById("root")); 

