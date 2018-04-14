import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_key = 'AIzaSyA8ZPf-cjk8Z_8nADo0xuDa1JTPWseIvgg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };
        this.handleInputSearchTerm('surfboards');


    }
    handleInputSearchTerm(term) {
        YTSearch({key: API_key, term : term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        })
    }
    render() {
        const videoSearch = _.debounce((term)=> this.handleInputSearchTerm(term), 500);

        return (
            <div>
                <SearchBar onInputSearchTerm = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelection = {(video)=>this.setSelectedVideo(video)} />
            </div> 
       );      
    }

    setSelectedVideo(video) {
        this.setState({selectedVideo : video});
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));