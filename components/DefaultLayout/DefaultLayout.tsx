import {Header} from "components/Header/Header";

interface DefaultLayoutProps {
  children?: any;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const {children} = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
