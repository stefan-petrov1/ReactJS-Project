import './PaginationButton.css';

export const PaginationButton = ({
  selectedButtonNum,
  currentButtonNum,
  changePageHandler,
}) => {
  const isActive = selectedButtonNum === currentButtonNum;

  const onClick = !isActive
    ? changePageHandler.bind(null, currentButtonNum)
    : undefined;

  let buttonClass = 'pagination-button';

  if (isActive) {
    buttonClass += ' selected-pagination-button';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {currentButtonNum}
    </button>
  );
};
