type Props = {
  children?: React.ReactNode;
  bgColor?: string; // 背景色のクラスを受け取る
};

const Container = ({ children, bgColor = '' }: Props) => {
  return <div className={`${bgColor}`}><div className="container mx-auto px-5">{children}</div></div>;
};

export default Container;
