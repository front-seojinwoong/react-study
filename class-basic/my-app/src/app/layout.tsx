import ApolloSetting from "@/commons/settings/apollo-setting";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko'>
      <body>
        <div>============= header </div>
        <ApolloSetting>{children}</ApolloSetting>
        <div>============= footer </div>
      </body>
    </html>
  );
};

export default RootLayout;
