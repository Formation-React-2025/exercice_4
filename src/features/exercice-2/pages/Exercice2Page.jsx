import React, { Children, } from 'react';
import PropTypes from 'prop-types';
import OnClickButton from '../components/on-click-button/OnClickButton';

const Exercice2Page = ({
  title,
  children = undefined,
}) => (
  <section>
    <header>
      <h2>{title}</h2>
    </header>

    <section>
      {Children.map(children, (c) => c)}

      <OnClickButton />
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

Exercice2Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Exercice2Page;
