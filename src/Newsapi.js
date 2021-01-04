import React, { components } from "react";
import News from "./News"
export default class Client extends React.Component {
  state = {
    loading: true,
    person: []
  };

  async componentDidMount() {
    const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    const reponse = await fetch(url);
    const data = await reponse.json();
    // this.setState({ person: data.articles });
    console.log(data.articles)
    this.setState({ person: [data.articles[0].title ,data.articles[1].title ,data.articles[2].title , data.articles[3].title ,data.articles[4].title,data.articles[5].title,data.articles[6].title,data.articles[7].title,data.articles[8].title,data.articles[9].title,data.articles[10].title,data.articles[11].title,data.articles[12].title,data.articles[13].title,data.articles[14].title,data.articles[15].title,data.articles[16].title,data.articles[17].title,data.articles[18].title,data.articles[19].title,data.articles[20].title,data.articles[21].title,data.articles[22].title,data.articles[23].title,data.articles[24].title,data.articles[25].title,data.articles[26].title,data.articles[27].title ,data.articles[28].title ,data.articles[29].title , data.articles[30].title ] });

    
  };



  render() {
    return <div>
    <News title = {this.state.person[0]}/>
    <News title = {this.state.person[2]}/>
    <News title = {this.state.person[3]}/>
    <News title = {this.state.person[4]}/>
    <News title = {this.state.person[5]}/>
    <News title = {this.state.person[6]}/>
    <News title = {this.state.person[7]}/>
    <News title = {this.state.person[8]}/>
    <News title = {this.state.person[9]}/>
    <News title = {this.state.person[10]}/>
    <News title = {this.state.person[11]}/>
    <News title = {this.state.person[12]}/>
    <News title = {this.state.person[13]}/>
    <News title = {this.state.person[14]}/>
    <News title = {this.state.person[15]}/>
    <News title = {this.state.person[16]}/>
    <News title = {this.state.person[17]}/>
    <News title = {this.state.person[18]}/>
    <News title = {this.state.person[19]}/>
    <News title = {this.state.person[20]}/>
    <News title = {this.state.person[21]}/>
    <News title = {this.state.person[22]}/>
    <News title = {this.state.person[23]}/>
    <News title = {this.state.person[24]}/>
    <News title = {this.state.person[25]}/>
    <News title = {this.state.person[26]}/>
    <News title = {this.state.person[27]}/>
    <News title = {this.state.person[28]}/>
    <News title = {this.state.person[29]}/>
    <News title = {this.state.person[30]}/>
    {/* <br/>
    {this.state.person[2]}
    <br/>
    {this.state.person[3]}
    <br/>
    {this.state.person[4]}
    <br/>
    {this.state.person[5]}
    <br/>
    {this.state.person[6]}
    <br/>
    {this.state.person[7]}
    <br/>
    {this.state.person[8]}
    <br/>
    {this.state.person[9]}
    <br/>
    {this.state.person[10]}
    <br/>
    {this.state.person[11]}
    <br/>
    {this.state.person[12]}
    <br/>
    {this.state.person[13]}
    <br/>
    {this.state.person[14]}
    <br/>
    {this.state.person[15]}
    <br/>
    {this.state.person[16]}
    <br/>
    {this.state.person[17]}
    <br/>
    {this.state.person[18]}
    <br/>
    {this.state.person[19]}
    <br/>
    {this.state.person[20]}
    <br/>
    {this.state.person[21]}
    <br/>
    {this.state.person[22]}
    <br/>
    {this.state.person[23]}
    <br/>
    {this.state.person[24]}
    <br/>
    {this.state.person[25]}
    <br/>
    {this.state.person[26]}
    <br/>
    {this.state.person[27]}
    <br/>
    {this.state.person[28]}
    <br/>
    {this.state.person[29]}
    <br/>
    {this.state.person[30]}
      */}
    </div>;
  }
}
