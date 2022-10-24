function Create({ createQuestion, setPage }) {
  return (
    <section className="form-section">
      <form
        action="submit"
        className="form"
        data-js="form"
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);

          createQuestion(data.question, data.answer, data.tag.split(", "));

          event.target.reset();
          setPage("home");
        }}
      >
        <label htmlFor="input-question">Your question:</label>
        <textarea name="question" id="input-question" cols="60" rows="10" maxLength="200"></textarea>
        <small className="form__character-count">
          (<span data-js="amountLeft-question">200</span> characters left)
        </small>
        <label htmlFor="input-answer">Your answer:</label>
        <textarea name="answer" id="input-answer" cols="60" rows="10" maxLength="200"></textarea>
        <small className="form__character-count">
          (<span data-js="amountLeft-answer">200</span> characters left)
        </small>
        <label htmlFor="input-tag">Tag:</label>
        <input type="text" name="tag" id="input-tag" />
        <button className="form__button" type="submit">
          Create new questions
        </button>
      </form>
    </section>
  );
}

export default Create;
