function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttons = Object.keys(options);
  return (
    <div className="button__list">
      {buttons.map((button, index) => (
        <button type="button" onClick={onLeaveFeedback} key={index}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
