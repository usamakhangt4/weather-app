import type {NextPage} from "next";
import {QueryClientProvider, QueryClient} from "react-query";

import Home from "./Home/Home";

const queryClient = new QueryClient();

const IndexPage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default IndexPage;
