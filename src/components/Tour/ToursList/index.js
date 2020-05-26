import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Tour from '..';
import { ListContainer } from './styles';
import Title from '../../Title';
import { PrimaryButton } from '../../../styles/Button';

export default class ToursList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  };

  componentDidMount() {
    this.setState({
      tours: this.props,
      sortedTours: this.props.tours,
    });
  }

  render() {
    const { sortedTours } = this.state;
    const { title, subtitle, featured } = this.props;
    return (
      <ListContainer>
        <Title title={title} subtitle={subtitle} />
        <div className="center">
          {sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />;
          })}
        </div>
        {featured && (
          <AniLink fade to="/tours">
            <PrimaryButton>explore tours</PrimaryButton>
          </AniLink>
        )}
      </ListContainer>
    );
  }
}

ToursList.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  featured: PropTypes.string,
};

ToursList.defaultProps = {
  featured: null,
};
