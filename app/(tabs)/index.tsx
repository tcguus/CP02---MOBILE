import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../../components/Header";

export default function HomeScreen() {
  const openLink = () => {
    Linking.openURL("https://www.greenpeace.org/brasil/");
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Header title="EcoApp" />
        <Text style={styles.subtitle}>
          Junte-se a nós na conscientização ambiental! 🌍
        </Text>

        <Image
          source={{
            uri: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
        />
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Descubra formas de proteger o planeta, entender os impactos do clima
            e como você pode contribuir para um futuro mais sustentável!
          </Text>
        </View>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1342229204/pt/foto/a-lake-in-the-shape-of-a-recycling-sign-in-the-middle-of-untouched-nature-an-ecological.jpg?b=1&s=612x612&w=0&k=20&c=treR9-npnu28Of7u3zx3juojdnfBvMF_1hPN3U8vkD4=",
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Você sabia? 💡 </Text>
          <Text style={styles.cardText}>
            A reciclagem de 1 tonelada de papel pode salvar até 20 árvores e
            economizar 32 mil litros de água. 🌳💧
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={openLink}>
          <Text style={styles.buttonText}>Apoie ações ambientais!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb(231, 255, 241)",
  },
  container: { flex: 1, alignItems: "center", padding: 0 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#00796b",
  },
  image: {
    width: "70%",
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
    color: "#004d40",
    width: "70%",
  },
  card: {
    backgroundColor: "#e0f2f1",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { fontWeight: "bold", fontSize: 17, marginBottom: 5 },
  cardText: { fontSize: 16, color: "#00695c" },
  button: {
    backgroundColor: "#007f5f",
    padding: 14,
    marginBottom: 20,
    borderRadius: 10,
    width: "60%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
