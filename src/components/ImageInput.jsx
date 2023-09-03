import { useState } from "react";

let optiic = new Optiic({
  apikey: "Fq7VYVBh3Qp7g9paqD58fH37hkUpr8gfuAjZ9cwWbbot",
});
//do file with file state next

const ImageInput = () => {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    optiic
      .process({
        url: url,
      })
      .then((result) => {
        setText(result.text);
        console.log(result);
      });
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="choose-url">Enter Image Link</label>
        <input
          type="text"
          id="choose-url"
          value={url}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="submit2">
          Submit
        </button>
      </form>
      <textarea value={text} disabled id="" cols="30" rows="10"></textarea>
    </>
  );
};

export default ImageInput;
