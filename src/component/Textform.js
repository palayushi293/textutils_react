import React ,{useState} from 'react'

export default function Testform(props)
{
  const handleOnChange=(event)=>
    {
      console.log("UPPER CS BCD");
      setText(event.target.value); //jo text thea +h aisa hi kuki value nhi jo add nhi hoga

    }
    const handleUpClick=()=>
      {
        console.log("is os clicked");
        let ne=text.toUpperCase();
        setText(ne);
      }
      const handlelower=()=>
        {
          let se=text.toLowerCase();
          setText(se);
        }
        const handleclear=()=>
          {
            let b="";
            setText(b);
          }
  const [text, setText] = useState('enter thr text here');
  //text="jv";//wrong
  //setText("new Text");
    return (
        <>

<div className="form-floating">
    <br/>
    <br/>
    <h1>{props.heading}</h1>
  
  <textarea className="form-control mx-46"  value={text} onChange={handleOnChange}  placeholder="Leave a comment here" id="floatingTextarea" rows="100"    ></textarea>

  <label htmlFor="floatingTextarea"></label>
  <br/>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper</button>
 
  <button type="button" className="btn btn-primary mx-2" onClick={handlelower}>Lower Case</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>
<div className="container my-2">
  <br/>
  <h1>YOUR TEXT SUMMARY</h1>
  <br/>
  <p>it has {text.split(" ").length} words, {text.length}  character</p>
  <p>{0.008*text.split(" ").length} minute to read this word</p>
  <h1>Preview </h1>
  <p>
{text}
  </p>
</div>
    </>
    )
}