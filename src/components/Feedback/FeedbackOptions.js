function FeedbackOptions({ options, onLeaveFeedback, style }) {
  const buttons = Object.keys(options);
  return (
    <div className={style.button__list}>
      {buttons.map((button, index) => (
        <button type="button" onClick={onLeaveFeedback} key={index}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
