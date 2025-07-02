import React, {useEffect, useState,} from 'react';
import InputText from '../../../commons/components/input/input-text/InputText';
import LabelButton from '../../../commons/components/input/buttons/label-button/LabelButton';

const requiredFieldError = (value) => {
  if (!value?.trim()) {
    return 'Le champ est obligatoire.';
  }

  return '';
};

const calculateErrors = (formulaire) => {
  const nom = requiredFieldError(formulaire.nom);
  const prenom = requiredFieldError(formulaire.prenom);

  const errors = {
    nom,
    prenom,
  };

  return Object.keys(errors).filter((key) => errors[key]).reduce((acc, key) => ({
    ...acc,
    [key]: errors[key],
  }), {});
};

const Exercice4Form = () => {
  // const [
  //   displayMessage,
  //   setDisplayMessage,
  // ] = useState(false);

  const [
    formulaire,
    setFormulaire,
  ] = useState({
    nom: '',
    prenom: '',
    displayMessage: false,
  });

  useEffect(() => {
    if (formulaire.nom === 'Dupont') {
      console.log('Le nom saisit est Dupont !')
    }
  }, [
    formulaire.nom,
  ]);

  const onEnregistrerClick = (e) => {
    e.preventDefault();
    const errors = calculateErrors(formulaire);
    setFormulaire({
      ...formulaire,
      errors,
      displayMessage: formulaire.prenom === 'Jean',
    })
    // if (Object.keys(errors)?.length > 0) {
    //   setFormulaire({
    //     ...formulaire,
    //     errors,
    //   });
    // }
  }

  return (
    <form
      className="exercice-4-form"
      onSubmit={onEnregistrerClick}
      noValidate
    >
      <InputText
        label="Nom"
        name="nom"
        value={formulaire.nom}
        onValueChange={(nom) => setFormulaire({
          ...formulaire,
          nom,
          errors: {
            ...formulaire.errors,
            nom: '',
          },
        })}
        error={formulaire.errors?.nom}
        required
      />

      <InputText
        label="Prénom"
        name="prenom"
        value={formulaire.prenom}
        onValueChange={(prenom) => setFormulaire({
          ...formulaire,
          prenom,
          errors: {
            ...formulaire.errors,
            prenom: '',
          },
        })}
        error={formulaire.errors?.prenom}
        required
      />


      <LabelButton
        type="submit"
        label="Enregistrer"
      />

      {formulaire.displayMessage && (
        <span>
          Le prénom est Jean !!
        </span>
      )}
    </form>
  );
};

export default Exercice4Form;
