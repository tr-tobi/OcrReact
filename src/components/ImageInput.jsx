import { useState } from "react";

let optiic = new Optiic({
  apikey: "Fq7VYVBh3Qp7g9paqD58fH37hkUpr8gfuAjZ9cwWbbot",
});
//do file with file state next

const ImageInput = () => {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const [hide, setHide] = useState(true);

  const handleSubmit = (event) => {
    setHide(false);
    event.preventDefault();
    optiic
      .process({
        url: url,
      })
      .then((result) => {
        setText(result.text);
        setHide(true);
      })
      .catch((err) => {
        setHide(true);
        setIsError(true);
      });
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  if (isError) {
    return (
      <p className="has-text-danger">
        Request limit has been reached! Please come back and try again tomorrow.
      </p>
    );
    //test
  }

  return (
    <div className="card">
      <form>
        <div className="center">
          <label className="subtitle is-4" htmlFor="choose-url">
            Enter Image Link Address:
          </label>
          <input
            className="input is-success"
            type="text"
            id="choose-url"
            value={url}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="submit2 button is-success">
            Submit
          </button>
          <div hidden={hide}>
            <progress className="progress is-medium is-primary" max="100">
              15%
            </progress>
          </div>
        </div>
      </form>
      <textarea
        className="textarea is-primary"
        value={text}
        disabled
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default ImageInput;
