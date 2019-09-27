import React from "react";
import { Row, Col } from "../presentation";
import {SearchForm, SearchResults} from "../containers"

let searchResults;

function setSearchResults(me) {
  searchResults = me;
}

function updateSearchResults(results) {
  console.log(results);
  searchResults.setState({urls: results.slice(0, 10)});
}

function Search(props) {
  return (
    <div>
      <h1>Search By Breed!</h1>
      <Row>
        <Col size="lg-12">
          <SearchForm searchResults={updateSearchResults}/>
        </Col>
      </Row>
      <Row>
        <Col size="lg-12">
          <SearchResults me={setSearchResults}/>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
