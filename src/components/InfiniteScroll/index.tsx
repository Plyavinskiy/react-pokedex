import { Waypoint } from "react-waypoint";

interface IProps {
  children: React.ReactNode;
  callBack(args: Waypoint.CallbackArgs): void;
}

const InfiniteScroll = ({ children, callBack }: IProps) => {
  return <div>Infinite Scroll</div>;
};

export default InfiniteScroll;
