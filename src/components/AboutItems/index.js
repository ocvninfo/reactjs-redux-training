import React from 'react';
import './styles.scss';
import { withTranslation } from "react-i18next";
import { compose } from 'redux';

class AboutItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {heading, description, aboutList} = this.props;

        return (
            <div className="about-list">
                <div className="heading-title">
                    <h2>{heading}</h2>
                    <p>{description}</p>
                </div>
                <ul>
                    {aboutList.map((item, key) => {
                        return (
                            <li key={key}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default compose(
    withTranslation(),
)(AboutItems);
