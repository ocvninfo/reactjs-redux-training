import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { compose } from 'redux';

import AboutItems from '../../components/AboutItems';

class AboutPage extends Component {

    constructor() {
        super();
        this.state = {
            heading: 'React',
            description: 'A JavaScript library for building user interfaces',
            listItems: [
                {
                    title: 'Declarative',
                    description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
                },
                {
                    title: 'Component-Based',
                    description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
                },
                {
                    title: 'Learn Once, Write Anywhere',
                    description: 'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <AboutItems
                        heading={this.state.heading}
                        description={this.state.description}
                        aboutList={this.state.listItems}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(AboutPage);
