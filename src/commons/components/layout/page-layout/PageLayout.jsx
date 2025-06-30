import React, { Children, } from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({
  title,
  children = undefined,
}) => (
  <section>
    <header>
      <h2>{title}</h2>
    </header>

    <section>
      {Children.map(children, (c) => c)}
    </section>

    <footer>
      {new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </footer>
  </section>
);

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLayout;
