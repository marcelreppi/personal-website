import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <div className="flex flex-col items-center space-y-5">
        <div className="text-4xl font-medium medium-font text-highlight">
          Error 404: Page not found!
        </div>
        <div className="space-y-3 text-center text">
          <p>Whoops!</p>
          <p>I don't know what you did there but I know what you should definitely do:</p>
          <p>Get your COVID-19 vaccine!</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
