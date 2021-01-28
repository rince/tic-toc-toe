import { FC } from 'react';

type Props = {
  value: string;
  onClick: () => void;
};

const Square: FC<Props> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
