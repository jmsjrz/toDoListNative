import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Tâche from './components/Tâche'; // On importe le composant Tâche

// Composant principal de l'application
export default function Application() {
  // État pour suivre la nouvelle tâche saisie par l'utilisateur
  const [nouvelleTâche, setNouvelleTâche] = useState();
  
  // État pour suivre la liste des tâches
  const [listeTâches, setListeTâches] = useState([]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const ajouterTâche = () => {
    Keyboard.dismiss(); // Cache le clavier une fois la tâche ajoutée
    setListeTâches([...listeTâches, nouvelleTâche]); // Ajoute la nouvelle tâche à la liste existante
    setNouvelleTâche(null); // Réinitialise le champ de saisie
  }

  // Fonction pour marquer une tâche comme complétée et la retirer de la liste
  const terminerTâche = (index) => {
    let copieListe = [...listeTâches];
    copieListe.splice(index, 1); // Retire la tâche de l'index donné
    setListeTâches(copieListe); // Met à jour la liste des tâches
  }

  return (
    <View style={styles.conteneurPrincipal}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1 // S'assure que le ScrollView occupe tout l'espace disponible
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.sectionTâches}>
          <Text style={styles.titreSection}>TÂCHES DU JOUR</Text>
          <View style={styles.zoneTâches}>
            {
              listeTâches.map((tâche, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => terminerTâche(index)}>
                    <Tâche texte={tâche} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>

      {/* Zone de saisie d'une nouvelle tâche */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajuste le comportement selon la plateforme
        style={styles.zoneSaisieTâche}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Écrire une tâche'} 
          value={nouvelleTâche} 
          onChangeText={texte => setNouvelleTâche(texte)} 
        />
        <TouchableOpacity onPress={() => ajouterTâche()}>
          <View style={styles.boutonAjout}>
            <Text style={styles.texteBouton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

// StyleSheet pour styliser l'application principale
const styles = StyleSheet.create({
  conteneurPrincipal: {
    flex: 1,
    backgroundColor: '#E8EAED', // Couleur de fond gris clair
  },
  sectionTâches: {
    paddingTop: 80, // Espace en haut de la section
    paddingHorizontal: 20, // Espace à gauche et à droite
  },
  titreSection: {
    fontSize: 24, // Taille du texte
    fontWeight: 'bold' // Gras
  },
  zoneTâches: {
    marginTop: 30, // Espace au-dessus des tâches
  },
  zoneSaisieTâche: {
    position: 'absolute', // Positionnement en bas de l'écran
    bottom: 60, // Espace par rapport au bas de l'écran
    width: '100%',
    flexDirection: 'row', // Les éléments sont alignés en ligne
    justifyContent: 'space-around', // Espacement entre les éléments
    alignItems: 'center' // Centrage vertical
  },
  input: {
    paddingVertical: 15, // Espace en haut et en bas du texte dans le champ
    paddingHorizontal: 15, // Espace à gauche et à droite du texte dans le champ
    backgroundColor: '#FFF', // Couleur de fond blanche
    borderRadius: 60, // Bords arrondis
    borderColor: '#C0C0C0', // Couleur de la bordure grise
    borderWidth: 1, // Épaisseur de la bordure
    width: 250, // Largeur du champ de saisie
  },
  boutonAjout: {
    width: 60, 
    height: 60,
    backgroundColor: '#FFF', // Fond blanc
    borderRadius: 60, // Cercle parfait
    justifyContent: 'center', // Centrage horizontal
    alignItems: 'center', // Centrage vertical
    borderColor: '#C0C0C0', // Couleur de la bordure
    borderWidth: 1, // Épaisseur de la bordure
  },
  texteBouton: {},
});
