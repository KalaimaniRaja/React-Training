import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar";
import ImageList from './imageList';

class FormSearchList extends React.Component {
  state= {
    images: []
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

    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div>
        <h3>Form Search List</h3>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />

          <p>Result : {this.state.images.length} images</p>

          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default FormSearchList;
