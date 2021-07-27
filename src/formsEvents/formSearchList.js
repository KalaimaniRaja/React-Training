import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";

class FormSearchList extends React.Component {
  state= {
    image: []
  }

  onSearchSubmit = async (term) => {
    console.log(term);

    //instead of axios - unsplash declared
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      } 
      
      // headers: {
      //   Authorization: "Client-ID EFQHtt_VuWz1A3jyn77pQd9n8lfojJAvqStbzmqEgVE"
      // }
    })

    // .then((response)=> {
    //   console.log(response.data.results)
    // })

    console.log(response.data.results)

    this.setState({image: response.data.results})
  }

  render() {
    return (
      <div>
        <h3>Form Search List</h3>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />

          <p>Result : {this.state.image.length} images</p>
        </div>
      </div>
    );
  }
}

export default FormSearchList;
