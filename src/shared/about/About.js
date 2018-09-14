import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as aboutActions from './actions';
import {Link} from 'react-router-dom';

class About extends Component {
    componentWillMount() {
        const {requestNewsApi} = this.props.aboutActions;
        const {responseIsReady} = this.props;

        if (!responseIsReady) {
            requestNewsApi();
        }

    }


    render() {
        const {news, responseIsReady} = this.props;
        
        const menu = !news.items ? null : news.items.map(menuItem => {
            return (
                    <li key={menuItem.id}>
                        <Link to={menuItem.object_slug}>{menuItem.title}</Link>
                    </li>
            )
        })

        return (
                <div>
                    <h1>About</h1>
                    <ul>
                        {menu}
                    </ul>
                    {/*{newsList}*/}
                </div>
        )

    }
}

const mapStateToProps = state => ({
    news: state.about.news,
    responseIsReady: state.about.responseIsReady
});

const mapDispatchToProps = dispatch => ({
    aboutActions: bindActionCreators(aboutActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(About)
