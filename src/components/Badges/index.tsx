interface ITypes {
  typeOne: string;
  typeTwo: string;
}

const Badges: React.FC<ITypes> = ({ typeOne, typeTwo }: ITypes) => {
  return <div>Badges</div>;
};

export default Badges;
