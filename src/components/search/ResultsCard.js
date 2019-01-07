import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

const ResultsCard = ({article}) => {
    const {author, title, description, url} = article;

    return (
        <div className="m-2 automation-card">
            <Card>
                <CardBody>
                    <CardTitle className="h5">
                        <a href={url} rel="noopener noreferrer" target="_blank">{title}</a>
                    </CardTitle>
                    <CardText>{description}</CardText>
                    <CardText className="mt-3 h6">Written by: {author}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

ResultsCard.propTypes = {
    article: PropTypes.object.isRequired
};

export {ResultsCard};