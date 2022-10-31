export interface ILayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProp> = ({ children }: ILayoutProp) => {
  return <div>Layout</div>;
};

export default Layout;
