import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_key = 'AIzaSyA8ZPf-cjk8Z_8nADo0xuDa1JTPWseIvgg';

// Create a component which produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };
        this.handleInputSearchTerm('surfboards');


    }
    handleInputSearchTerm(term){
        YTSearch({key: API_key, term : term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        })
    }
    render() {
        return (
            <div>
                <SearchBar onInputSearchTerm = {(term) => {this.handleInputSearchTerm(term)}}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelection = {(video)=>this.setSelectedVideo(video)} />
            </div> 
       );      
    }

    setSelectedVideo(video) {
        this.setState({selectedVideo : video})
    }

}
// Insert the generated HTMl and put it inside DOM.

ReactDOM.render(<App />, document.querySelector('.container'));