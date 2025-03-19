"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSetting {
  children: React.ReactNode;
}

const ApolloSetting = (props: IApolloSetting) => {
  const client = new ApolloClient({
    uri: "https://main-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
