import React from 'react'
import request from 'superagent'
import PersonProfile from '../../components/people/PersonProfile'
import {paths} from '../../utils/config';

class PersonProfileContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: []
        };
    }

    componentDidMount = () => {
//console.log(`${paths().folder}dist/assets/languageData.json`);
        request
            .get(`${paths().folder}dist/assets/languageData.json`)
            .end((err, res) => {
                if (err) {
                    console.log( err);
                    return;
                }

                const json = JSON.parse(res.text);

                this.setState({
                    languages: json.itemListElement
                });
            });
    };

    render = () => {
        return (
            <section>
                <PersonProfile languages={this.state.languages}/>
            </section>
        );
    }
}

export default PersonProfileContainer;