import { useState } from "react";

function NewMobile(props) {
    const [newMobile, setNewmobile] = useState(
        {
            brand:"",
            price:"",
            year:"",
            model:"",
        }
    );

    const inputHandler =(e) =>{
        setNewmobile((previousState) =>{
            return { ...previousState, ...{ [e.target.name] : e.target.value}}
        });
    }

    const newMobileHandler = (e) =>{
        e.preventDefault();
        // console.log(newMobile);
        props.addMobile({...newMobile});
        // lifting state up- sending state from chilld to parent
    };
    
  return (
    <div className="login">
        <form onSubmit={ newMobileHandler}>
        <label>Enter brand:
            <input type="text" placeholder="brand" name="brand" value={ newMobile.brand || ""} onChange={inputHandler} />
        </label>

        <label>Enter price:
            <input type="text" placeholder="price" name="price" value={ newMobile.price || ""} onChange={ inputHandler} />
        </label>

        <label>Enter year:
            <input type="text" placeholder="year" name="year" value={ newMobile.year || ""} onChange={ inputHandler} />
        </label>

        <label>Enter model:
            <input type="text" placeholder="text" name="model" value={ newMobile.model || ""} onChange={ inputHandler} />
        </label>

        <button>Submit</button>
    </form>
    </div>
  );
}

export default NewMobile;
