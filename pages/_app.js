import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppContext from "../context/AppContext";
import Cookies from "js-cookie";

class MyApp extends App {
  state = {
    user: null,
  };

  setUser = user => {
    this.setState({ user });
  };

  // すでにユーザーの Cookie 情報が残っているかを確認する。
  componentDidMount() {
    const token = Cookies.get("token"); // token の中に jwt が入っている。

    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(async res => {
        if (!res.ok) {
          Cookies.remove("token");
          this.setState({user: null});
          return null;
        }
        const user = await res.json();
        this.setState(user); // ログイン
      })
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider value={{user: this.state.user, setUser: this.setUser }}>
        <>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </AppContext.Provider>
    );
  }
}

export default withData(MyApp);
