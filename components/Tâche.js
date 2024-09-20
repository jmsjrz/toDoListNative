import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Le composant Tâche représente une tâche dans la liste de tâches.
// Il prend comme propriété (props) un texte qui est le nom de la tâche.
const Tâche = (props) => {
  return (
    <View style={styles.conteneurTâche}>
      <View style={styles.contenuGauche}>
        <View style={styles.carré}></View>
        <Text style={styles.texteTâche}>{props.texte}</Text>
      </View>
      <View style={styles.cercle}></View>
    </View>
  )
}

// StyleSheet pour styliser le composant Tâche
const styles = StyleSheet.create({
  conteneurTâche: {
    backgroundColor: '#FFF', // Couleur de fond blanche
    padding: 15, // Espace interne autour du texte
    borderRadius: 10, // Coins arrondis
    flexDirection: 'row', // Alignement en ligne
    alignItems: 'center', // Alignement vertical centré
    justifyContent: 'space-between', // Espace égal entre les éléments
    marginBottom: 20, // Espace en bas de chaque tâche
  },
  contenuGauche: {
    flexDirection: 'row', // Les éléments dans une ligne
    alignItems: 'center', // Centré verticalement
    flexWrap: 'wrap' // Si nécessaire, le contenu se pliera à une nouvelle ligne
  },
  carré: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6', // Bleu clair
    opacity: 0.4, // Un peu transparent
    borderRadius: 5,
    marginRight: 15, // Espace à droite du carré
  },
  texteTâche: {
    maxWidth: '80%', // Limite la largeur du texte à 80% de la largeur disponible
  },
  cercle: {
    width: 12,
    height: 12,
    borderColor: '#FF0000', // Contour rouge
    borderWidth: 2, // Largeur de la bordure
    borderRadius: 5, // Le rend circulaire
  },
});

export default Tâche;
