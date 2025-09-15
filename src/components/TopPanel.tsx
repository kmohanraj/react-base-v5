import { Button } from "react-bricks";
import '../assets/styles/top-panel.scss';

const TopPanel = ({
  title,
  btnLabel,
  onClick,
  buttonIcon
}: {
  title: string;
  btnLabel: string;
  onClick: () => void;
  buttonIcon?: string;
}) => {
  return (
    <div className="top-panel">
      <h1>{title}</h1>
      <Button prefix={buttonIcon} variant="primary" label={btnLabel} onClick={onClick} />
    </div>
  );
};

export default TopPanel;
